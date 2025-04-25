import Maybe from './maybe'

/**
 * Factory function for creating an instance of the type Just.
 * @param value The contained value of type T.
 * @returns A new Just.
 */
const Just = <T>(value: T): Maybe<T> => {
  return {
    flatMap: <U>(fn: (x: T) => Maybe<U>) => fn(value),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getOrElse: (_defaultValue: T): T => value,
    isNothing: (): boolean => false,
    map: <U>(fn: (x: T) => U) => Just<U>(fn(value)),
    toString: (): string => `Just(${value})`
  }
}

export default Just
