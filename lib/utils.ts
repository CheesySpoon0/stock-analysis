export function formatDate(input: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(input));
}

export function formatCurrency(value: number, currency = 'USD') {
  return new Intl.NumberFormat('en', { style: 'currency', currency }).format(value);
}
