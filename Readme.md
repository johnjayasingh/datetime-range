# Date Time Range

So this is how it will work

`npm i datetime-range`

then

```js
const dateTimeRange = require('datetime-range');
const time_in = '2020-03-31 13:15:41';
const time_out = '2020-04-01 17:48:52';
const output = dateTimeRange(time_in, time_out);

console.log(output)
```

you will get output like below with hourly,daily and all list

```json
{
  output: [
    { date: '2020-03-31', hour: '13:00', time: 44 },
    { date: '2020-03-31', hour: '14:00', time: 60 },
    { date: '2020-03-31', hour: '15:00', time: 60 },
    { date: '2020-03-31', hour: '16:00', time: 60 },
    { date: '2020-03-31', hour: '17:00', time: 60 },
    { date: '2020-03-31', hour: '18:00', time: 60 },
    { date: '2020-03-31', hour: '19:00', time: 60 },
    { date: '2020-03-31', hour: '20:00', time: 60 },
    { date: '2020-03-31', hour: '21:00', time: 60 },
    { date: '2020-03-31', hour: '22:00', time: 60 },
    { date: '2020-03-31', hour: '23:00', time: 60 },
    { date: '2020-04-01', hour: '00:00', time: 60 },
    { date: '2020-04-01', hour: '01:00', time: 60 },
    { date: '2020-04-01', hour: '02:00', time: 60 },
    { date: '2020-04-01', hour: '03:00', time: 60 },
    { date: '2020-04-01', hour: '04:00', time: 60 },
    { date: '2020-04-01', hour: '05:00', time: 60 },
    { date: '2020-04-01', hour: '06:00', time: 60 },
    { date: '2020-04-01', hour: '07:00', time: 60 },
    { date: '2020-04-01', hour: '08:00', time: 60 },
    { date: '2020-04-01', hour: '09:00', time: 60 },
    { date: '2020-04-01', hour: '10:00', time: 60 },
    { date: '2020-04-01', hour: '11:00', time: 60 },
    { date: '2020-04-01', hour: '12:00', time: 60 },
    { date: '2020-04-01', hour: '13:00', time: 60 },
    { date: '2020-04-01', hour: '14:00', time: 60 },
    { date: '2020-04-01', hour: '15:00', time: 60 },
    { date: '2020-04-01', hour: '16:00', time: 60 },
    { date: '2020-04-01', hour: '17:00', time: 49 }
  ],
  hourly: {
    '2020-03-31': {
      '13:00': 44,
      '14:00': 60,
      '15:00': 60,
      '16:00': 60,
      '17:00': 60,
      '18:00': 60,
      '19:00': 60,
      '20:00': 60,
      '21:00': 60,
      '22:00': 60,
      '23:00': 60
    },
    '2020-04-01': {
      '00:00': 60,
      '01:00': 60,
      '02:00': 60,
      '03:00': 60,
      '04:00': 60,
      '05:00': 60,
      '06:00': 60,
      '07:00': 60,
      '08:00': 60,
      '09:00': 60,
      '10:00': 60,
      '11:00': 60,
      '12:00': 60,
      '13:00': 60,
      '14:00': 60,
      '15:00': 60,
      '16:00': 60,
      '17:00': 49
    }
  },
  daily: { '2020-03-31': 644, '2020-04-01': 1069 }
}
```