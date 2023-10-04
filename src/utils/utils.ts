import moment from "moment";

function convertNumberToTimeFormat(num: number) {
  const hours: number = Math.floor(num / 60);
  const minutes: number = num % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  else return `${minutes}m`
}

const randomColor = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0')



interface IGenerateRandomNumberParam {
  start?: number
  end: number
}
function generateRandomNumber(end = 10, start = 0): number {
  return Math.floor(Math.random() * end) + start
}

function formateDateToString(date: Date, dateFormat = 'DD/MM/YYYY') {
  return moment(date).format(dateFormat)
}

export const Utils = {
  randomColor,
  convertNumberToTimeFormat,
  generateRandomNumber,
  formateDateToString,
}