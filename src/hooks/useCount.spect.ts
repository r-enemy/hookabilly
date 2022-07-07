import { renderHook } from '@testing-library/react-hooks'

import { useCount } from './useCount'

describe('useCount()', () => {
  it(' ', () => {
    const { result } = renderHook(() => useCount)
  })
})
