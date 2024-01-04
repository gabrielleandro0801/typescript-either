import { Either } from "./either";
import { DivisionByZeroException, InvalidArgumentException, MathException } from "../math-exceptions";

class Math {
    static divide(firstValue: number, secondValue: number): Either<number, MathException> {
        if (secondValue === 0)
            return Either.fail(new DivisionByZeroException());

        if (new Set([firstValue, secondValue]).has(NaN))
            return Either.fail(new InvalidArgumentException());

        return Either.success(firstValue / secondValue);
    }
}

(() => {
    const argsList: Array<any> = [
        {
            firstValue: 10,
            secondValue: 0,
        },
        {
            firstValue: NaN,
            secondValue: 10,
        },
        {
            firstValue: 10,
            secondValue: 10,
        },
    ];

    for (const args of argsList) {
        const response: Either<number, MathException> = Math.divide(
            args.firstValue,
            args.secondValue,
        );

        if (response.isError()) {
            console.log(`Error: ${response.error.message}`);
        } else {
            console.log(`Success: ${response.success}`);
        }
    }
})();
