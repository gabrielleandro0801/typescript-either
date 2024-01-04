type ConstructorInput<S, E> = {
    success?: S,
    error?: E
}

export class Either<S, E = Error> {
    private readonly _success: S;
    private readonly _error: E;

    private constructor(input: ConstructorInput<S, E>) {
        this._success = input.success;
        this._error = input.error;
    }

    static success<S>(success: S): Either<S, null> {
        return new Either<S, null>({
            success,
        });
    }

    static fail<E extends Error>(error: E): Either<null, E> {
        return new Either<null, E>({
            error,
        });
    }

    isSuccess(): boolean {
        return !this._error;
    }

    isError(): boolean {
        return !!this._error;
    }

    get success(): S {
        return this._success;
    }

    get error(): E {
        return this._error;
    }
}   
