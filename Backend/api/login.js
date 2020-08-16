var getFirebase = require("./../firebaseConfig.js");
var allowCors = require("./../corsConfig.js");

var database = getFirebase()

const checkLogin = (req, res) => {
  const credenciais = req.body;
  console.log(credenciais)
  return database.ref('/logins/' + credenciais.login).once('value').then(function (snapshot) {
    var usuarioEncontrado = snapshot.exists() ? true : false;
    if (!usuarioEncontrado){
      console.log("errado")
      return res.json({ result: false });
    } 
    if (snapshot.val() !== credenciais.senha) {
      console.log("errado")
      return res.json({ result: false });
    } else {
      console.log("certo")
      return res.json({ result: usuarioEncontrado });
    }
  })
}

module.exports = allowCors(checkLogin);