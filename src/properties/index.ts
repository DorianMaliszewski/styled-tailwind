import accessibility from './accessibility'
import background from './background'
import border from './border'
import boxAlignement from './boxAlignement'
import filters from './filters'
import flex from './flex'
import grid from './grid'
import spacing from './spacing'
import transform from './transform'
import transition from './transition'
import sizing from './sizing'
import layout from './layout'
import typography from './typography'
import interactivity from './interactivity'
import svg from './svg'
import effects from './effects'
import tables from './tables'

type ValidatorType = string | Function | boolean | number
type KeyType = string[] | string
type ComputeType = string | ((value: any) => string)
export type TailwindPropertyValue = string | boolean | number | undefined
export type TailwindPropertyType = [KeyType, ComputeType, ValidatorType[]]

const properties: TailwindPropertyType[] = [
  ...accessibility,
  ...background,
  ...border,
  ...boxAlignement,
  ...effects,
  ...filters,
  ...flex,
  ...grid,
  ...interactivity,
  ...layout,
  ...sizing,
  ...spacing,
  ...svg,
  ...tables,
  ...transition,
  ...transform,
  ...typography,
]

export const possibleProperties = properties.reduce<string[]>(
  (acc: string[], property: TailwindPropertyType) => {
    if (typeof property[0] === 'string') {
      acc.push(property[0])
    }
    if (Array.isArray(property[0])) {
      acc.push(...(property[0] as string[]))
    }
    return acc
  },
  [] as string[]
)

export type TailwindProperty = typeof possibleProperties[number]

export default properties
