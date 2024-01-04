export class MathException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class DivisionByZeroException extends MathException {
    constructor() {
        super("Unable to divide by 0");
    }
}

export class InvalidArgumentException extends MathException {
    constructor() {
        super("Arguments can not be NaN");
    }
}
