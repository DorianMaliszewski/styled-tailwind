import { TailwindPropertyType } from '.'

const svg: TailwindPropertyType[] = [
  [['fill', 'fillCurrent'], () => `fill-current`, [true, 'current']],
  [['stroke', 'strokeCurrent'], () => `stroke-current`, [true, 'current']],
  [['strokeW', 'strokeW'], `stroke`, [0, 1, 2]],
]

export default svg
