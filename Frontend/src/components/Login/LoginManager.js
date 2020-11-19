import LoginService from './LoginService';

class LoginManager {
  async realizarLogin(usuario, senha) {
    var body = {
      usuario: usuario,
      senha: senha,
    };

    return await LoginService.realizarLogin(body)
      .then((resposta) => {
        if (resposta && resposta.status === 200) {
            console.log(resposta)
          return {
            sucesso: true,
            autorizado: resposta.data.result
          };
        } else {
          return {
            sucesso: false,
            autorizado: false
          };
        }
      })
      .catch((error) => {
        if (error.response) {
          return {
            mensagem: error.response.data,
            autorizado: false
          };
        }
      });
  }
}

export default new LoginManager()
