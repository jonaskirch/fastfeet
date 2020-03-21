import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const dateFormat = (date, formatDate = 'dd/MM/yyyy') =>
  format(utcToZonedTime(parseISO(date), timezone), formatDate);

export { dateFormat };
