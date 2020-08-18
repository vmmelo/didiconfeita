export const serialize = (obj) => {
  const str = [];
  Object.keys(obj).map((p) => str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`))
  return str.join('&');
}

export const floatToReal = (valor) => {
  if (!valor || typeof parseFloat(valor) !== 'number' || Number.isNaN(parseFloat(valor))) return 'R$ 0,00'
  return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
}
