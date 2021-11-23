import * as React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from '../../../utils/useStyles';

type Props = {
  userInput: string;
  setUserInput: Function;
  disabled: boolean;
};

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
