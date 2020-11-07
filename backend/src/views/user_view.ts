import User from '../models/User';

export default {
  render(user: User) {
    const { name, email, admin } = user; 

    return {
      name,
      email,
      admin
      
    }
  }
}