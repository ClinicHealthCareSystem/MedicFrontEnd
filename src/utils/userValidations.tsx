export const unmaskPhone = (text?: string) =>
  text ? text.replace(/\D/g, "") : "";

export const maskPhone = (text?: string) => {
  let cleaned = unmaskPhone(text);
  if (!cleaned) return "";

  if (cleaned.length > 11) cleaned = cleaned.substring(0, 11);

  if (cleaned.length <= 2) return `(${cleaned}`;
  if (cleaned.length <= 6)
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
  if (cleaned.length <= 10)
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
      2,
      6
    )}-${cleaned.substring(6)}`;

  return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
    2,
    7
  )}-${cleaned.substring(7)}`;
};

export const formatDateTime = (text?: string) => {
  if (!text) return "";
  const cleaned = text.replace(/\D/g, "");
  if (cleaned.length < 12) return "";
  const ano = cleaned.substring(0, 4);
  const mes = cleaned.substring(4, 6);
  const dia = cleaned.substring(6, 8);
  const hora = cleaned.substring(8, 10);
  const minuto = cleaned.substring(10, 12);
  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
};
