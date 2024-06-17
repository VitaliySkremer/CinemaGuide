export const useMinuteToHours = (totalMinutes: number) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
  
    return `${hours} ч ${minutes} мин`;
}
