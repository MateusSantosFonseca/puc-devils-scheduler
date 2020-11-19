import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Typography,
  Container,
  CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoPucDevils from './../../assets/devils_redimensionada.png';
import LoginManager from './LoginManager';
import { Alert } from '@material-ui/lab';

const LoginComponent = () => {
  const classes = useStyles();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [alertErroAberto, setAlertErroAberto] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = async () => {
    setLoadingLogin(true);
    const resposta = await LoginManager.realizarLogin(login, senha);
    setLoadingLogin(false);

    if (resposta && resposta.sucesso && resposta.autorizado) {
      console.log(resposta);
      //navega pra outra tela passando dados
    } else {
      setAlertErroAberto(true);
      setTimeout(() => {
        setAlertErroAberto(false);
      }, 5000);
    }

    setLogin('');
    setSenha('');
  };

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={logoPucDevils} />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          <div style={{'textAlign' : 'center'}} className={(classes.form, 'mt-3')} noValidate>
            <TextField
              onChange={(event) => setLogin(event.target.value)}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='user'
              label='Usuário'
              name='user'
              value={login}
              autoFocus
              autoComplete='off'
            />
            <TextField
              onChange={(event) => setSenha(event.target.value)}
              variant='outlined'
              value={senha}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Button
              onClick={handleLogin}
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Entrar
            </Button>
            {loadingLogin && <CircularProgress align='center' className={classes.marginY}/>}
          </div>
          <Typography variant='body2' color='textPrimary' align='center'>
            <Link color='inherit' href='/matches'>
              Entrar como visitante
            </Link>
          </Typography>
        </div>
        <Box mt={8}>
          <Typography variant='body2' color='textSecondary' align='center'>
            <Link
              color='inherit'
              href='https://www.instagram.com/aaaepucminas/'
            >
              Instagram AAAE - PUC MG
            </Link>
          </Typography>
        </Box>
      </Container>
      {alertErroAberto && (
        <Alert
          className={classes.alertComponent}
          severity='error'
          variant='filled'
          onClose={() => {}}
        >
          <Typography variant='body1'>
            Infelizmente o login falhou! Verifique os dados e tente novamente!
          </Typography>
        </Alert>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#FFFFFF',
    width: 'auto',
    height: 'auto',
    marginBottom: '7%',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  marginY: {
    marginTop: '1%',
    marginBottom: '3%'
  },
  visitante: {
    marginTop: '5px',
  },
  alertComponent: {
    bottom: '0',
    position: 'absolute',
    width: '100%',
  }
}));

export default LoginComponent;
