const moment = require('moment');

module.exports = (time_in, time_out, obj_output = {}) => {
  const dates = [];
  const DATE_FORMAT = 'YYYY-MM-DD HH'

  let startDate = moment(time_in);
  let endDate = moment(time_out);

  startDate.startOf('hour')
  endDate.startOf('hour')
  endDate = endDate.add(1, 'hour');
  while (startDate.format(DATE_FORMAT) !== endDate.format(DATE_FORMAT)) {
    dates.push(startDate.toDate());
    startDate = startDate.add(1, 'hour');
  }

  const output = dates.map((date, index, arr) => {
    const output = {
      date: moment(date).format('YYYY-MM-DD'),
      hour: moment(date).format('HH:mm'),
    };
    if (!obj_output[output.date]) {
      obj_output[output.date] = {};
    }
    if (!obj_output[output.date][output.hour]) {
      obj_output[output.date][output.hour] = 0;
    }

    if (index === 0) {
      const endOf = moment(time_in).endOf('hour');
      const time = moment.duration(endOf.diff(moment(time_in)));
      output.time = time.asMinutes();
    }
    else if (index === arr.length - 1) {
      const startOf = moment(time_out).startOf('hour');
      const time = moment.duration(moment(time_out).diff(startOf));
      output.time = time.asMinutes();
    } else {
      output.time = 60;
    }
    output.time = Math.round(output.time);

    if (obj_output[output.date][output.hour] < output.time) {
      obj_output[output.date][output.hour] = output.time;
    }

    return output;
  });
  return {
    array: output,
    object: obj_output
  };

};
