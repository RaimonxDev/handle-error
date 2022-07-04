import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HandlerErrorResponse } from '../handler-error/handler-network-error';

@Injectable({
  providedIn: 'root'
})
export class HandlerHttpService {

  constructor(private _http: HttpClient) { }

  handlerGet<T>(endPoint: string, options: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this._http.get<T>(endPoint, options).pipe(catchError(err => new HandlerErrorResponse().error(err)));
  }

}
