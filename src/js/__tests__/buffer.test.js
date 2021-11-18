import getBuffer, { ArrayBufferConverter } from '../buffer';

test('should return string', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
