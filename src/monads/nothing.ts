import Maybe from './maybe'

/**
 * Factory function for creating an instance of the type Nothing.
 * @param value The contained value of type T.
 * @returns A new Nothing.
 */
const Nothing = <T>(): Maybe<T> => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    flatMap: <U>(_fn: (x: T) => Maybe<U>) => Nothing<U>(),
    getOrElse: (defaultValue: T): T => defaultValue,
    isNothing: (): boolean => true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    map: <U>(_fn: (x: T) => U) => Nothing<U>(),
    toString: (): string => `Nothing()`
  }
}

export default Nothing
