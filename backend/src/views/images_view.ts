import Image from '../models/Image';

export default {
	render(image: Image) {
		return {
			id: image.id,
			url: `http://192.168.0.100:3333/uploads/${image.path}` /* app mobile */
			//url: `http://localhost:3333/uploads/${image.path}` /* app web */
			
		};
	},

	renderMany(images: Image[]) {
		return images.map(image => this.render(image));
	}
};