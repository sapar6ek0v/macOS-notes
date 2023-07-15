import dayjs from 'dayjs';

export const displayDate = (date: Date) =>
  dayjs(date).format('MMMM D, YYYY h:mm A');
