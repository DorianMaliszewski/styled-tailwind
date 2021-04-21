import { TailwindPropertyType } from '.'

const accessibility: TailwindPropertyType[] = [
  [
    ['sr', 'screenReaders'],
    (value: string | boolean) => {
      if (typeof value === 'boolean') {
        return value ? 'sr-only' : 'not-sr-only'
      }
      if (typeof value === 'string') {
        return value
      }
      return ''
    },
    [true, false, 'sr-only', 'not-sr-only'],
  ],
]

export default accessibility
