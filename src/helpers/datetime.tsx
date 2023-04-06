export const dayInMilliseconds = 86400000;

export const yesterday = Date.now() - dayInMilliseconds;

export const mssecondsToTime = (s: number) => {
  const addZ = (n: number) => {
        return (n < 10 ? '0' : '') + n;
    };
  let ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    return `${hrs !== 0 ? `${addZ(hrs)}:` : ''}${addZ(mins)}:${addZ(secs)}${ms !== 0 ? `.${addZ(ms)}` : ''}`;
}
