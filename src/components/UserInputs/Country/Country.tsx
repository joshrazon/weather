import * as React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from '../../../utils/useStyles';

type Props = {
  userInput: string;
  setUserInput: Function;
  disabled: boolean;
};

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
