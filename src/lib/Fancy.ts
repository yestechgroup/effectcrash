import { Data, Effect, pipe } from "effect";

class WhyForTheLoveOfGodDidYouEnterFour extends Data.TaggedError("Four! Why?")<{
    message: string
}> { }


export class Fancy {
  constructor() {
    console.log('Fancy constructor');
  }

    private async giveMeANumber(input: number) {
        if (input === 4) {
            return pipe(
                Effect.fail( new WhyForTheLoveOfGodDidYouEnterFour( {message: 'I don\'t like 4'}) ),
                Effect.tap(() => {
                    Effect.log("entered bad number");
                })
            )
            
        }
        return Effect.succeed(`input: ${input} + 1 = ${input + 1}`);
    }

    public async giveMeANumberAsync(input: number) {
        const giveMeANumber = await this.giveMeANumber(input);

        const p = pipe(
            Effect.runPromise(giveMeANumber),
            // Effect.tap((_) =>  Effect.log('finished running effect')),
        )
        return p;
    }

    public async giveMeANumberAsync2(input: number) {
        const giveMeANumber = await this.giveMeANumber(input);        
        return Effect.runPromise(giveMeANumber);
    }
}