import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import orphanageView from '../views/orphanages_view';
import Orphanages from '../models/Orphanage';

interface FinalData {
	name: string;
	phone: number;
	latitude: number;
	longitude: number;
	about: string;
	instructions: string;
	opening_hours: string;
	open_on_weekends: boolean;
	images: Array<{
		path: string;
	}>
}

class OrphanageController {
		async index(request: Request, response: Response) {
			const orphanagesRepository = getRepository(Orphanages);

			const orphanage = await orphanagesRepository.find({
				relations: ['images']
			});

			return response.json(orphanageView.renderMany(orphanage));
		}

		async show(request: Request, response: Response) {
			const { id } = request.params;

			const orphanagesRepository = getRepository(Orphanages);

			const orphanage = await orphanagesRepository.findOneOrFail(id, {
				relations: ['images']
			});

			return response.json(orphanageView.renderOne(orphanage));
		}

    async create(request: Request, response: Response) {
        const {
			name,
			phone,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends
		} = request.body

		const orphanagesRepository = getRepository(Orphanages);

		//trabalhando com multiplos arquivos para fazer upload e um array de arquivos[]
		const requestImages = request.files as Express.Multer.File[];

		const images = requestImages.map(image => {
			return { path: image.filename }
		})

		const data = {
			name,
			phone,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends: open_on_weekends === 'true',
			images
		}

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			phone: Yup.number().required(),
			latitude: Yup.number().required(),
			longitude: Yup.number().required(),
			about: Yup.string().required().max(300),
			instructions: Yup.string().required(),
			opening_hours: Yup.string().required(),
			open_on_weekends: Yup.boolean().required(),
			images: Yup.array(
				Yup.object().shape({
				path: Yup.string().required()
			})
			)
		});

		const finalData = schema.cast(data) as FinalData

		await schema.validate(data, {
			abortEarly: false,
		});

		const orphanage = orphanagesRepository.create(finalData);

		await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
	}
	
}

export default new OrphanageController();