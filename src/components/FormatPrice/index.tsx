export function FormatPrice(preço: number) {
  return "R$ " + preço.toFixed(2).replace(".", ",");
}