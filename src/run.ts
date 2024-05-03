import { RRule } from './rrule'
import { Frequency } from './types'

const r = new RRule({
  freq: Frequency.WEEKLY,
  byweekday: ['MO', 'FR'],
  dtstart: new Date('2024-04-01'),
})

const res = r.after(new Date('2024-04-17'))
console.log(res)
