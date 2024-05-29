import axios from 'axios';

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await axios.get<T>(url)
  return res.data
}

// export const formatTime = (time: string): string => {
//   const [hours, minutes] = time.split(':');
//   const formattedHours = parseInt(hours, 10);
//   return `${formattedHours}:${minutes}`;
// };



export const formatDate = (dateStr: string): string => {
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Clear the time part for accurate comparison
  const isToday = date.toDateString() === today.toDateString();
  const isTomorrow = date.toDateString() === tomorrow.toDateString();

  if (isToday) {
    return 'today';
  } else if (isTomorrow) {
    return 'tomorrow';
  } else {
    // Get the day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }
};

export const formatTime = (timeString: string): string => {
  const date = new Date(timeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const amPm = hours >= 12 ? 'PM' : 'AM';
  return `${formattedHours}:${formattedMinutes} ${amPm}`;
};


