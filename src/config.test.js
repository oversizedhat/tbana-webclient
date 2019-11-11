import config from './config';
import expect from 'expect';

test('config should have api endpoint', () => {
  expect(config.apiEndPoint).toContain("https");
});

test('config should have correct update interval', () => {
  expect(config.updateIntervalMs).toEqual(1000);
});