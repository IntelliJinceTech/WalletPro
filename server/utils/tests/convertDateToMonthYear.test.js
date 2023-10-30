import { jest } from '@jest/globals'
import { convertDateToMonthYear } from '../convertDateToMonthYear'

describe('convertDateToMonthYear', () => {
  it('input conversion of 2023-10', () => {
    const result = convertDateToMonthYear('2023-10')

    expect(result).toBe('10/2023')
  })
  it('input conversion of 2021-09', () => {
    const result = convertDateToMonthYear('2021-09')

    expect(result).toBe('09/2021')
  })

  it('should throw an error for invalid input that is not a string', () => {
    expect(() => {
      convertDateToMonthYear(123)
    }).toThrow('Invalid date format')
  })

  it('should throw an error for invalid input with non-numeric year', () => {
    expect(() => {
      convertDateToMonthYear('abc-10')
    }).toThrow('Invalid date format')
  })

  it('should throw an error for invalid input with non-numeric month', () => {
    expect(() => {
      convertDateToMonthYear('2023-abc')
    }).toThrow('Invalid date format')
  })
})
