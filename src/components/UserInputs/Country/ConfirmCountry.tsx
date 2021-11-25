import { Select, MenuItem, Typography, InputLabel, Button } from '@material-ui/core';
import { useState } from 'react';
import { CountryCode } from '../../../App/types';
// import { useStyles } from '../../../utils/useStyles';
import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
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
}));

type Props = {
  countryCodes: CountryCode[];
  confirm: Function;
};

function ConfirmCountry({ countryCodes, confirm }: Props) {
  const classes = useStyles();
  const [countryCode, setCountryCode] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountryCode(event.target.value as string);
  };

  if (countryCodes.length > 1) {
    return (
      <>
        <Select
          className={classes.select}
          labelId="confirm-country"
          id="confirm-country"
          value={countryCode}
          onChange={handleChange}
        >
          {countryCodes.map((countryCode: CountryCode) => (
            <MenuItem key={countryCode.Name} value={countryCode.Code}>
              <Typography>{countryCode.Name}</Typography>
            </MenuItem>
          ))}
        </Select>
        <InputLabel className={classes.label} id="confirm-country">
          More than one country found, confirm desired country
        </InputLabel>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => confirm(countryCode)}
          color="primary"
        >
          Confirm
        </Button>
      </>
    );
  } else {
    return <></>;
  }
}

export default ConfirmCountry;
