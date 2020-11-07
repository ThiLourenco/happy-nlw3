import Image from '../models/Image';

export default {
	renderOne(image: Image) {
		const {
			id,
			path
		} = image

		return {
			id,
			url: `http://192.168.0.100:3333/uploads/${path}` /* app mobile */
			//url: `http://localhost:3333/uploads/${image.path}` /* app web */
			
		}
	},

	renderMany(images: Image[]) {
		return images.map(image => this.renderOne(image));
	}
};