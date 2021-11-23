import { Select, MenuItem, Typography, InputLabel, Button } from '@material-ui/core';
import { useState } from 'react';
import { CountryCode } from '../../../App/types';
import { useStyles } from '../../../utils/useStyles';

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
