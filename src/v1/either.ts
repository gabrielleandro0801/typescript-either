export type Either<E, S> = Left<E, S> | Right<E, S>;

export class Left<E, S> {
    private readonly _error: E;

    constructor(error: E) {
        this._error = error;
    }

    get error() {
        return this._error;
    }

    isLeft(): this is Left<E, S> {
        return true;
    }

    isRight(): this is Right<E, S> {
        return false;
    }
}

export class Right<E, S> {
    private readonly _success: S;

    constructor(success: S) {
        this._success = success;
    }

    get success() {
        return this._success;
    }

    isLeft(): this is Left<E, S> {
        return false;
    }

    isRight(): this is Right<E, S> {
        return true;
    }
}

function left<E, S>(error: E): Either<E, S> {
    return new Left<E, S>(error);
}

function right<E, S>(success: S): Either<E, S> {
    return new Right<E, S>(success);
}

export {
    left,
    right,
};
