const normalizeDate = (date, dateFormat = 'short') => {
  const stdDate = new Date(date);
  const location = 'ru-Ru';
  const shortSettings = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timezone: 'UTC',
  };
  const longSettings = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timezone: 'UTC',
  };
  if (dateFormat === 'long') {
    return stdDate.toLocaleDateString(location, longSettings).slice(0, -2) + ' года';
  } else if (dateFormat === 'short') {
    return stdDate.toLocaleString(location, shortSettings).slice(0, -1);
  }
};

export default normalizeDate;
