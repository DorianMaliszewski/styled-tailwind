const makeStepArray = (from: number, to: number, step: number) => {
  const array: number[] = []
  for (let i = from; i < to; i += step) {
    array.push(i)
  }
  return array
}

export default makeStepArray
