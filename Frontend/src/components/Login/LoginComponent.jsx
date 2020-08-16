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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.instagram.com/aaaepucminas/">
        PUC-Minas Devils
      </Link>{' '} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Visitante() {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      <Link color="inherit" href="#">
        Entrar como visitante
      </Link>
    </Typography>
  );
}

function CheckLogin(){
  /*
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login: 'atokzz', senha: 'atokzz321'})
};

  fetch("https://puc-devils-scheduler-api.vercel.app/api/login", requestOptions)
      .then(res => console.log(res.json()))
      */
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
        <form className={classes.form,
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
            onClick={CheckLogin()}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Entrar
          </Button>
        </form>
        <Visitante></Visitante>
      </div>
      <Box mt={8}>
        <Copyright/>
      </Box>
    </Container>
  );
}

export default LoginComponent;