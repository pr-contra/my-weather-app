const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const convertUnixTimeToDate = unix_timestamp =>
  new Date(unix_timestamp * 1000);

export const getFormattedFullDate = unix_timestamp => {
  const d = convertUnixTimeToDate(unix_timestamp);

  const year = d.getFullYear();
  const date = d.getDate();

  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];

  const dayName = days[d.getDay()];

  return `${dayName}, ${monthName} ${date}, ${year}`;
};

export const getFormattedDateNameShort = unix_timestamp => {
  const d = convertUnixTimeToDate(unix_timestamp);

  const dayName = daysShort[d.getDay()];

  return `${dayName}`;
};
