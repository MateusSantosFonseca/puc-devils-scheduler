import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logoPucDevils from './../../assets/devils_redimensionada.png'

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

function CheckLogin() {
  let credenciaisInseridas = JSON.stringify({login: "atokzz", senha: "atokzz321"});

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Credentials": true
    },
    body: credenciaisInseridas
  };

  fetch("http://localhost:3000/api/login", requestOptions)
    .then(status)
    .then(json)
    .then((resposta) => {
      if (resposta.result == true) {
        console.log("Login certo")
      } else {
        console.log("Login errado")
      }
    })
    .catch((error) => {
      alert("Ocorreu algum erro na comunicação com o serviço, tente novamente mais tarde. Err" +
          "o" + error)
    });
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#FFFFFF',
    width: 'auto',
    height: 'auto',
    marginBottom: '7%'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  visitante: {
    marginTop: '5px'
  }
}));

const LoginComponent = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logoPucDevils}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <div className={classes.form,
        "mt-3"} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuário"
            name="user"
            autoFocus
            autoComplete="off"/>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"/>
          <Button
            onClick={CheckLogin}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Entrar
          </Button>
        </div>
        <Typography variant="body2" color="textPrimary" align="center">
          <Link color="inherit" href="/matches">
            Entrar como visitante
          </Link>
        </Typography>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" href="https://www.instagram.com/aaaepucminas/">
            Instagram AAAE - PUC MG
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default LoginComponent;