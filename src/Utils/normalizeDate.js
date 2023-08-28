const normalizeDate = {
  short: (dt) => {
    const date = new Date(dt);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const dateRusLocal = date.toLocaleDateString('ru-RU', options);
    const normalizeDate = dateRusLocal[0]
      .toUpperCase()
      .concat(dateRusLocal.slice(1, dateRusLocal.length - 1))
    return normalizeDate;

  },
  long: (dt) => {
    const date = new Date(dt);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateRusLocal = date.toLocaleDateString('ru-RU', options);
    const normalizeDate = dateRusLocal[0]
      .toUpperCase()
      .concat(dateRusLocal.slice(1, dateRusLocal.length - 1))
      .concat('ода')
    return normalizeDate;
  },
}

export default normalizeDate;
