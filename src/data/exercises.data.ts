import type { OptionGroup } from '@/types/form.types'

export const exercises: OptionGroup[] = [
  {
    label: 'Krafttraining',
    options: [
      { value: '1-1-6', label: 'Krafttraining, hart (gesamtes Training)' },
      { value: '1-2-4.5', label: 'Krafttraining, mittel (gesamtes Training)' },
      { value: '1-3-3', label: 'Krafttraining, leicht (gesamtes Training)' },
      { value: '1-4-18.5', label: 'Krafttraining, hart (nur Sätze)' },
      { value: '1-5-15', label: 'Krafttraining, mittel (nur Sätze)' },
      { value: '1-6-12.5', label: 'Krafttraining, leicht (nur Sätze)' },
    ],
  },
  {
    label: 'Ausdauer',
    options: [
      { value: '2-5-8', label: 'Joggen (8 km/h)' },
      { value: '2-6-10', label: 'Joggen (9,5 km/h)' },
      { value: '2-7-12.5', label: 'Joggen (12 km/h)' },
      { value: '2-8-14', label: 'Joggen (14 km/h)' },
      { value: '2-9-16', label: 'Joggen (16 km/h)' },
      { value: '2-10-18', label: 'Joggen (17,5 km/h)' },
      { value: '2-16-6', label: 'Radfahren (leicht, ~15 km/h)' },
      { value: '2-17-8', label: 'Radfahren (moderat, ~20 km/h)' },
      { value: '2-18-10', label: 'Radfahren (schnell, ~25 km/h)' },
    ],
  },
  {
    label: 'Spielsport',
    options: [
      { value: '3-1-7', label: 'Fußball (locker)' },
      { value: '3-2-10', label: 'Fußball (Wettkampf)' },
      { value: '3-3-8', label: 'Handball (locker)' },
      { value: '3-4-12', label: 'Handball (Wettkampf)' },
      { value: '3-7-4.5', label: 'Badminton (Freizeit)' },
      { value: '3-8-7', label: 'Badminton (Wettkampf)' },
      { value: '3-9-6', label: 'Basketball (locker)' },
      { value: '3-10-8', label: 'Basketball (Wettkampf)' },
    ],
  },
]
