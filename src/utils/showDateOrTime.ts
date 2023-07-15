import dayjs from 'dayjs';

export const showDateOrTime = (date: Date) => {
  const today = new Date();

  if (today.toDateString() === date.toDateString()) {
    return dayjs(date).format('h:mm A');
  }

  return dayjs(date).format('MM/DD/YYYY');
};
