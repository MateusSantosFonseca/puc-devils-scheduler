import axios from 'axios';
import { handleAmbiente } from './../../config/handleAmbiente'

class LoginService {
  async realizarLogin(body) {
    return await axios.post(`${handleAmbiente().PUBLIC_URL}/login/`, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default new LoginService();