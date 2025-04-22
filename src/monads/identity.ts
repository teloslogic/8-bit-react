/**
 * The Identity type is a very simple type that has no interesting side effects and is
 * effectively a container of some value.
 */
type Identity<T> = {
  /**
   * Chain computations that return an Identity
   * @param fn Computational mapper.
   */
  flatMap<U>(fn: (x: T) => Identity<U>): Identity<U>
  /**
   * Executes a function that extracts the value in the Identity container.
   * @param fn Value extraction function.
   */
  fold<U>(fn: (x: T) => U): U
  /**
   * Transforms the value inside this container.
   * @param fn Transformation function.
   */
  map<U>(fn: (x: T) => U): Identity<U>
  /**
   * A string representation of this container.
   */
  toString(): string
}

export default Identity
