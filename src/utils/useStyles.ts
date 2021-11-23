import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    height: '100vh',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 'max-content',
  },
  cardLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  select: {
    width: '95%',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  label: {
    fontSize: '12px',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  submitButton: {
    display: 'none',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  city: {
    marginBottom: theme.spacing(3),
  },
  pos: {
    marginBottom: 12,
  },
  cardContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  temp: {
    fontSize: '45px',
  },
}));
