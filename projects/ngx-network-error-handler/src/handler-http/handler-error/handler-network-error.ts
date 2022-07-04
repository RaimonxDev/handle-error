import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';

export class HandlerErrorResponse {
  constructor() { }

  error(error: HttpErrorResponse) {
    switch (error.status) {

      case 400:
        return throwError(() => new Error('bad rq'))

      case 401:
        return throwError(() => new Error('required authorization'))

      case 403:
        return throwError(() => new Error('forbidden'))

      case 404:
        return throwError(() => new Error('not found'))

      case 405:
        return throwError(() => new Error('Method Not Allowed'))
      case 500:
        return throwError(() => new Error('Internal Server error'))
      case 502:
        return throwError(() => new Error('Bad Gateway'))

      default:
        return throwError(() => new Error('default'))
        break;
    }
  }
}
