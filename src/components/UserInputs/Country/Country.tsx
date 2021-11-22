import * as React from 'react';
import { TextField, makeStyles, createStyles, Theme } from '@material-ui/core';

type Props = {
  userInput: string;
  setUserInput: Function;
  disabled: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  })
);

function Country({ userInput, setUserInput, disabled }: Props) {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <TextField
      id="country"
      label="Country"
      variant="outlined"
      value={userInput}
      disabled={disabled}
      onChange={handleChange}
      className={classes.textField}
    />
  );
}

export default Country;