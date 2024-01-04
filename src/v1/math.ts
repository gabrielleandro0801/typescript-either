import { Either, left, right } from "./either";
import { DivisionByZeroException, InvalidArgumentException, MathException } from "../math-exceptions";

class Math {
    static divide(firstValue: number, secondValue: number): Either<MathException, number> {
        if (secondValue === 0)
            return left(new DivisionByZeroException());

        if (new Set([firstValue, secondValue]).has(NaN))
            return left(new InvalidArgumentException());

        return right(firstValue / secondValue);
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
        const response: Either<MathException, number> = Math.divide(
            args.firstValue,
            args.secondValue,
        );

        if (response.isLeft()) {
            console.log(`Error: ${response.error.message}`);
        } else {
            console.log(`Success: ${response.success}`);
        }
    }
})();
