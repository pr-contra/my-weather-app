// export const getLang = () => {
//   if (navigator.languages !== undefined) return navigator.languages[0];
//   return navigator.language;
// };

export function convertUnixTimeToDate(unix_timestamp) {
  // return new Date(unix_timestamp * 1e3).toISOString().slice(-13, -5);
  // return new Date(unix_timestamp * 1e3).toISOString().slice(0, 10);
  //################
  // const dtFormat = new Intl.DateTimeFormat(getLang(), {
  //   timeStyle: 'medium',
  //   timeZone: 'UTC',
  // });
  // return dtFormat.format(new Date(unix_timestamp * 1e3));
  //################
  // return new Date(unix_timestamp * 1000).toLocaleTimeString();
  //##################
  const d = new Date(unix_timestamp * 1000);
  const year = d.getFullYear(); // 2019
  const date = d.getDate();

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

  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayName = days[d.getDay()];

  const formatted = `${dayName}, ${monthName} ${date}, ${year}`;

  return formatted;

  //###################
  // const today = new Date(unix_timestamp * 1000);
  // const finalDate = new Date(today);
  // finalDate.setDate(today.getDate() + 3);

  // return finalDate.toLocaleTimeString();
}
