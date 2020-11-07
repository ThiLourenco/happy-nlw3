import Orphanage from '../models/Orphanage';
import images_view from './images_view';

export default {
	renderOne(orphanage: Orphanage) {
		const {
			id,
			name,
			phone,
			latitude,
			longitude,
			about,
			instructions,
			open_on_weekends,
			opening_hours,
			images
		} = orphanage

		return {
			id,
			name,
			phone,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends,
			images: images_view.renderMany(images)
		}
	},

	renderMany(orphanages: Orphanage[]) {
		return orphanages.map(orphanage => this.renderOne(orphanage));
	}
}