import Just from './just'
import Maybe from './maybe'
import Nothing from './nothing'

/**
 * Factory function for creating an instance of the type Maybe.
 * @param value The contained value of type T.
 * @returns A new Maybe.
 */
const MaybeOf = <T>(value: T): Maybe<T> => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return Nothing<T>()
  } else {
    return Just<T>(Object.freeze(value))
  }
}

export default MaybeOf
