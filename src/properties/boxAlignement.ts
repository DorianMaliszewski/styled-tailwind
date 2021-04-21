import { TailwindPropertyType } from '.'

const boxAlignement: TailwindPropertyType[] = [
  [
    'justifyContent',
    'justify',
    ['center', 'start', 'end', 'between', 'around', 'evenly'],
  ],
  ['justifyItems', 'justify-items', ['center', 'start', 'end', 'stretch']],
  [
    'justifySelf',
    'justify-self',
    ['auto', 'center', 'start', 'end', 'stretch'],
  ],

  [
    'alignContent',
    'content',
    ['center', 'start', 'end', 'between', 'around', 'evenly'],
  ],
  ['alignItems', 'items', ['start', 'end', 'center', 'baseline', 'stretch']],
  ['alignSelf', 'self', ['auto', 'start', 'end', 'center', 'stretch']],

  [
    'placeContent',
    'place-content',
    ['center', 'start', 'end', 'between', 'around', 'evenly', 'stretch'],
  ],
  ['placeItems', 'place-items', ['start', 'end', 'center', 'stretch']],
  ['placeSelf', 'place-self', ['auto', 'start', 'end', 'center', 'stretch']],
]

export default boxAlignement
