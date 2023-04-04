import { dayInMilliseconds, mssecondsToTime, yesterday } from './datetime';

describe('datetime', () => {

    test('dayInMilliseconds should equal 86400000', () => {
      expect(dayInMilliseconds).toEqual(86400000);
    });
 
    test('should be yesterday', () => {
      const now = Date.now();
      const offsettestrun = 100;
      expect(yesterday).toBeGreaterThan(now - dayInMilliseconds -offsettestrun);
      expect(yesterday).toBeLessThan(now);
    });

    test('should correctly format time', () => {
      expect(mssecondsToTime(1001)).toEqual('00:01.01');
      expect(mssecondsToTime(1000)).toEqual('00:01');
      expect(mssecondsToTime(61000)).toEqual('01:01');
      expect(mssecondsToTime(3661000)).toEqual('01:01:01');
      expect(mssecondsToTime(3661610)).toEqual('01:01:01.610');
    });
});
