export const formataData = (data) => {
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}