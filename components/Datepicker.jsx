import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { IconButton, FormControl } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const Datepicker = ({ name, value, handleFields, removeQueryParam, setFormData, formData }) => {



  return (
    <FormControl className='gap'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          name={name}
          size='small'
          inputFormat="YYYY-MM-DD"
          label={name[0].toUpperCase() + name.slice(1)}
          value={value || null}
          disableFuture={true}
          inputProps={{
            readOnly: true,
          }}
          onChange={(e) => {
            handleFields(e, name);
          }}

          renderInput={(params) =>
            <>
              <TextField {...params} size="small" />
              {value && (
                <IconButton
                  size="small"
                  style={{
                    top: '3px',
                    right: '55px',
                    position: 'absolute',
                  }}
                  onClick={() => {
                    setFormData({ ...formData, [name]: "" });
                    removeQueryParam(name);
                  }}
                >
                  <ClearIcon />
                </IconButton>
              )}
            </>
          }
        />
      </LocalizationProvider>

    </FormControl>
  )
}

export default Datepicker
