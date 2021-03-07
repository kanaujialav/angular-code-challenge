import { Role } from '../app/models';
export const environment = {
  production: true,
  apiUrl: 'http://localhost:4200'
};

export const usersArray = [
  { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
  { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
]