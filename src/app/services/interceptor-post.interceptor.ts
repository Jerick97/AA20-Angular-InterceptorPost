import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class InterceptorPostInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Interceptado Correcto");
    //Cuando utilizamos el request ya no se puede utilizar, por eso se debe clonar antes de ser manipulada
    //Para eso se debe hacer un clone y añadir los headers y parámetros
    const postReq = request.clone({headers:request.headers.set('Token-Post','AKIRA-TORIYAMA')});//el nombre del token no debe llevar espacios o no funcionara
    return next.handle(postReq).pipe(
      catchError(this.manejarError) //Capturamos el error
    );;
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError(() => new Error('Error personalizado'));
  }
}
