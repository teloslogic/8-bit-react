import Identity from './identity'

/**
 * Factory function for creating an instance of the type Identity.
 * @param value The contained value of type T.
 * @returns A new Identity.
 */
const IdentityOf = <T>(value: T): Identity<T> => {
  return {
    flatMap: <U>(fn: (x: T) => Identity<U>) => fn(Object.freeze(value)),
    fold: <U>(fn: (x: T) => U) => fn(Object.freeze(value)),
    map: <U>(fn: (x: T) => U) => IdentityOf<U>(fn(Object.freeze(value))),
    toString: (): string => `Identity(${value})`
  }
}

export default IdentityOf
