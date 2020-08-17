import { floatToReal, serialize } from './funcoes-comuns';

it('should convert float to BRL format', () => {
  let money = floatToReal(5.4);
  expect(money).toBe('R$ 5,40');
  money = floatToReal(5);
  expect(money).toBe('R$ 5,00');
  money = floatToReal(5000);
  expect(money).toBe('R$ 5000,00');
});

it('should serialize object', () => {
  const obj = {
    testando: 'string de teste',
    numero: 999999999
  };
  expect(serialize(obj)).toBe('testando=string%20de%20teste&numero=999999999');

  expect(serialize({})).toBe('');
});
