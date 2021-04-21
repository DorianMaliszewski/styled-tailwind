const makeNegativeAndPositiveArray = (...values: number[]): number[] => {
  const array = values
  array.push(...values.map((value) => value * -1))
  return array
}

export default makeNegativeAndPositiveArray
