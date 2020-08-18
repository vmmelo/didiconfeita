import { Instagram, Whatsapp } from '.'

it('should have the right type', () => {
  expect(typeof Instagram).toBe('function')
  expect(typeof Whatsapp).toBe('function')
});
