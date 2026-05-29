import api from '../../../lib/axios';
import type { LoginRequest, LoginResponse } from '../types/auth.types';

export const authService = {
  login: (data: LoginRequest) =>
    api.post<LoginResponse>('/api/auth/login', data).then((r) => r.data),

  logout: () => {
    localStorage.removeItem('vitora_token');
  },
};
