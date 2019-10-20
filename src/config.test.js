import config from './config';
import expect from 'expect';

test('config should have api endpoint', () => {
  expect(config.apiEndPoint).toContain("https");
});