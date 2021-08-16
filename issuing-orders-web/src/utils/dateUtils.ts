const addLeftZero = (numero: number) => {
  if (numero <= 9)
    return "0" + numero;
  else
    return numero;
}

export const formatSimpleDate = (date: Date | string | undefined) => {
  const newDate = date ? new Date(date) : '';
  return newDate ? `${addLeftZero(newDate.getDate())}/${addLeftZero(newDate.getMonth() + 1)}/${newDate.getFullYear()}` : '';
}