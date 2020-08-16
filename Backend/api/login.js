var getFirebase = require("./../firebaseConfig.js");
var allowCors = require("./../corsConfig.js");

var database = getFirebase()

const checkLogin = (req, res) => {
  const credenciais = req.body;
  return database.ref('/logins/' + credenciais.login).once('value').then(function (snapshot) {
    if (!snapshot.exists()) return res.json({ result: false });
    if (snapshot.val() !== credenciais.senha)
      return res.json({ result: false });
    else {
      return res.json({ result: true });
    }
  })
}

module.exports = allowCors(checkLogin);