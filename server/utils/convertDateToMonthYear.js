export const convertDateToMonthYear = (date) => {
  //input is "2023-10"
  if (typeof date !== 'string') {
    throw new Error('Invalid date format')
  }

  const [year, month] = date.split('-')

  if (isNaN(parseInt(year)) || isNaN(parseInt(month))) {
    throw new Error('Invalid date format')
  }

  if (date) return `${month}/${year}`
}
