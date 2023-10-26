export const convertDateToMonthYear = (date) => {
  //input is "2023-10"
  const [year, month] = date.split('-')
  return `${month}/${year}`
}
