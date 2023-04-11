export const dayInMilliseconds = 86400000;

export const yesterday = Date.now() - dayInMilliseconds;

export const mssecondsToTime = (s: number): string => {
  const addZ = (n: number): string => {
    return `${n < 10 ? '0' : ''}${n}`;
  };
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;
  return `${hrs !== 0 ? `${addZ(hrs)}:` : ''}${addZ(mins)}:${addZ(secs)}${
    ms !== 0 ? `.${addZ(ms)}` : ''
  }`;
};
