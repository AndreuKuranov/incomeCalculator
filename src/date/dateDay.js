const availablePerDay = (sum, percent) => {
  const daysInMonth = () => {
    const number = new Date();
    return new Date(number.getFullYear(), number.getMonth() + 1, 0).getDate();
  };
  return ((sum - (sum * (percent / 100))) / daysInMonth()).toFixed();
};

export default availablePerDay;
