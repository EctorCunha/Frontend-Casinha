export function formatPrice(price) {
  return Number(price).toLocaleString('BRL', {
    style: 'currency',
    currency: 'BRL',
  });
}
