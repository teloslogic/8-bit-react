import { describe, expect, it } from 'vitest'

import Identity from '../identity'
import IdentityOf from '../identity.of'

describe('The Identity Monad', () => {
  it('should be able to map many operations', () => {
    const TWO = 2
    const THREE = 3
    const FOUR = 4

    const addBy = (x: number) => (y: number) => x + y
    const multiplyBy = (a: number) => (b: number) => a * b

    const identity: Identity<number> = IdentityOf<number>(TWO)

    const result = identity
      .map(addBy(FOUR))
      .map(multiplyBy(THREE))
      .flatMap(x => IdentityOf(x - TWO))
      .map(addBy(TWO))
      .flatMap(x => IdentityOf(x + FOUR))
      .flatMap(y => IdentityOf(y + TWO))

    expect(result.fold(x => `The container's value is: ${x}`)).toEqual(`The container's value is: 24`)
    expect(`${result}`).toEqual('Identity(24)')
  })
})
