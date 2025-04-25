/**
 * The Maybe type represents the possibility of some value or nothing.
 * It is often used where null traditionally would to represent the absence
 * of a value. The advantage of using a Maybe type over null is that
 * it is both composable and requires the developer to explicitly acknowledge
 * the potential absence of a value, helping to avoid the existence of null
 * pointer exceptions.
 */
type Maybe<T> = {
  /**
   * Similar to map but used for functions that return a Maybe.
   * @param fn Mapping function that returns a Maybe.
   */
  flatMap<U>(fn: (x: T) => Maybe<U>): Maybe<U>
  /**
   * Returns the contained value or a default value if it's Nothing.
   * @param defaultValue Contained value.
   */
  getOrElse(defaultValue: T): T
  /**
   * Checks if the instance is Nothing.
   * @returns a boolean of true if instance is Nothing.
   */
  isNothing: () => boolean
  /**
   * Applies a function to the wrapped value and returns a new Maybe instance.
   * @param fn Mapping function.
   */
  map<U>(fn: (x: T) => U): Maybe<U>
  /**
   * A string representation of this container.
   */
  toString(): string
}

export default Maybe
