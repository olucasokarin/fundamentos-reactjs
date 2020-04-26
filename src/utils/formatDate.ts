const formatDate = (data: Date): string =>
  new Date(data).toLocaleDateString('pt-br');

export default formatDate;
