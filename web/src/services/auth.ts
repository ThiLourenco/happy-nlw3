import { AxiosResponse } from 'axios';
import api from './api';

interface AuthResponse {
  token: string;
}

export async function asyncSignInService(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
  return await api.post('/login/auth', {email, password});
}