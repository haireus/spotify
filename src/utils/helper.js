export const getSecondToMinute = (value) => {
  const sec = parseInt(value, 10);
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);

  // add 0 if value < 10; Example: 2 => 02
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};
