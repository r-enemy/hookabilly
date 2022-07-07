import { useMemo, useState } from 'react'

import { UseBoolean, UseBooleanMethods } from './types'

/**
 * Utils to easily manage boolean states
 *
 * setState.set(newState) Update state
 * setState.on() Sets state true
 * setState.off() Sets state false
 * setState.toggle() Toggle state value
 */
export const useBoolean: UseBoolean = (initial = false) => {
  const [state, setState] = useState(
    typeof initial === 'function' ? Boolean(initial()) : Boolean(initial),
  )

  const methods = useMemo<UseBooleanMethods>(
    () => ({
      set: setState,
      on: () => setState(true),
      off: () => setState(false),
      toggle: () => setState((prevState) => !prevState),
    }),
    [],
  )

  return [state, methods]
}
