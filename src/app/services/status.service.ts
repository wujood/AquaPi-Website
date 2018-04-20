import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {

  // TODO: real values
  constructor() { }

  isConnected() : boolean {
    return true;
  }

  hasError(): string {
    return null;
  }
}
