import { FermatAlg } from './fermat-alg';
import { FermatTheorem } from './types/fermat-alg.interface';

export class FermatAlgFactory {
  public static create(a: number, p: number): FermatTheorem {
    return new FermatAlg(a, p);
  }
}
