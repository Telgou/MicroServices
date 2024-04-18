export interface AuthenticationResponse {
    token: string;
    type: string;
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    roles: string[];
  }
  