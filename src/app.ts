import { FermatAlgFactory } from "@/algorithm/fermat/fermat-alg-factory";

export class App {
  public static main(): void {
    const args = process.argv.slice(2);

    const a = Number(args[0]);
    const p = Number(args[1]);

    if (Number.isNaN(a) || Number.isNaN(p)) {
      console.error(`Invalid arguments supplied: ${args[0]}, ${args[1]}`);
      process.exit(1);
    }

    const fermatAlg = FermatAlgFactory.create(a, p);

    const firstAlgorithmResult = fermatAlg.firstTest();
    const secondAlgorithmResult = fermatAlg.secondTest();

    console.log(firstAlgorithmResult, secondAlgorithmResult);
    console.info("The second arg satisfies the Fermat's theorem");
  }
}
