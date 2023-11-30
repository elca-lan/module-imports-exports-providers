import { Provider } from '@angular/core';

export class NameService {
  public constructor(public readonly name: string) {}

  public static provide(name: string): Provider {
    return {
      provide: NameService,
      useValue: new NameService(name),
    };
  }
}
