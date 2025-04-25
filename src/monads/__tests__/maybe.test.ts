import { describe, expect, it } from 'vitest'

import Maybe from '../maybe'
import MaybeOf from '../maybe.of'

describe('The Maybe Monad', () => {
  it('should be able process a Just type', () => {
    const DEFAULT_VALUE = 0
    const TWO = 2
    const FIVE = 5
    const TEN = 10
    const RESULT = 105

    const maybe: Maybe<number> = MaybeOf<number>(FIVE)

    const result = maybe
      .map(x => x * TWO)
      .flatMap(y => MaybeOf(y * TEN))
      .map(a => a + FIVE)

    expect(result.getOrElse(DEFAULT_VALUE)).toEqual(RESULT)
    expect(result.isNothing()).toEqual(false)
    expect(`${result}`).toEqual(`Just(${RESULT})`)
  })

  it('should not be able to process a Nothing type', () => {
    const DEFAULT_VALUE = -1
    const ZERO = 0
    const TWO = 2
    const FOUR = 4

    const maybe: Maybe<number> = MaybeOf<number>(ZERO / ZERO)

    const result = maybe
      .flatMap(x => MaybeOf(x + FOUR))
      .map(y => y * TWO)
      .map(a => a * FOUR)

    expect(result.getOrElse(DEFAULT_VALUE)).toBe(DEFAULT_VALUE)
    expect(result.isNothing()).toBe(true)
    expect(`${result}`).toEqual('Nothing()')
  })
})
