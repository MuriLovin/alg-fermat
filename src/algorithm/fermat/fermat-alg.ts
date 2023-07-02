export class FermatAlg {
  private readonly a: number;
  private readonly p: number;

  constructor(a: number, p: number) {
    this.a = a;
    this.p = p;
  }

  public firstTest(): number | null {
    const firstAlgorithmCongruence = Math.pow(this.a, this.p);
    let count = 0;

    while (count <= Number.MAX_SAFE_INTEGER) {
      const k = (firstAlgorithmCongruence - this.a) / this.p;

      if (Number.isInteger(k)) {
        return k;
      }

      count++;
    }

    return null;
  }

  public secondTest(): number | null {
    const secondAlgorithmCongruence = Math.pow(this.a, this.p - 1);
    let count = 0;

    while (count <= Number.MAX_SAFE_INTEGER) {
      const k = (secondAlgorithmCongruence - 1) / this.p;

      if (Number.isInteger(k)) {
        return k;
      }

      count++;
    }

    return null;
  }
}
