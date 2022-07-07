import { useCallback, useState } from 'react'

export interface SetBooleanState {
  set(value: boolean | ((prevState?: boolean) => boolean)): void
  on(): void
  off(): void
  toggle(): void
}

export interface UseBoolean {
  (initial?: boolean | (() => boolean)): [boolean, SetBooleanState]
}

/**
 * Utils to easily manage boolean states
 *
 * setState(newState) Update value
 * setState.on() Sets true
 * setState.off() Sets false
 * setState.toggle() Toggle current state
 */
export const useBoolean: UseBoolean = (initial = false) => {
  const [state, setState] = useState(
    typeof initial === 'function' ? Boolean(initial()) : Boolean(initial),
  )

  const set = setState as SetBooleanState['set']

  const on = useCallback(() => set(true), [])

  const off = useCallback(() => set(false), [])

  const toggle = useCallback(() => set((prevState) => !prevState), [])

  return [
    state,
    {
      set,
      on,
      off,
      toggle,
    },
  ]
}
