import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function MyDatePicker({changeDate}) {

  const [value, setValue] = React.useState (dayjs('2022-04-17T15:30'));


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          label="Basic date time picker"
          name="myDate"
          value={value}
          onChange={(newValue) => setValue(newValue)}

        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
