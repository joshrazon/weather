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
  })
);
function City({ userInput, setUserInput, disabled }: Props) {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  return (
    <TextField
      id="city"
      label="City"
      variant="outlined"
      value={userInput}
      disabled={disabled}
      onChange={handleChange}
      className={classes.textField}
    />
  );
}

export default City;
