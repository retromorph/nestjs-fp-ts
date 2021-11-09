import * as E from "fp-ts/Either";
import { map, Observable } from "rxjs";

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler, HttpException,
} from "@nestjs/common";

export type HttpExceptionEither<T> = E.Either<HttpException, T>

@Injectable()
export class EitherInterceptor implements NestInterceptor {
  public intercept(
    _: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    return next.handle().pipe(
      map((input) => {
        if (E.isLeft(input)) {
          throw input;
        }
        return input;
      }),
    );
  }
}
