import { DynamicModule, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";

import { EitherInterceptor } from "./either/Either.interceptor";

@Module({})
export class NestjsFpTsModule {
  public static forRoot(): DynamicModule {
    return {
      module: NestjsFpTsModule,
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: EitherInterceptor,
        },
      ],
    };
  }
}
