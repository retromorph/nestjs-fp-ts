import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map, Observable } from "rxjs";
import * as E from "fp-ts/Either";

@Injectable()
export class EitherInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map(input => {
          if (E.isLeft(input)) {
            throw input;
          }
          return input;
        }),
      );
  }
}
