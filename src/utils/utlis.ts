export function convertNumberToTimeFormat(num: number) {
  const hours: number = Math.floor(num / 60);
  const minutes: number = num % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  else return `${minutes}m`
}
