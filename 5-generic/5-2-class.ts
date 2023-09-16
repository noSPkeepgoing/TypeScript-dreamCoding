// either : a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left() {
    return this.leftValue;
  }
  right() {
    return this.rightValue;
  }
}
