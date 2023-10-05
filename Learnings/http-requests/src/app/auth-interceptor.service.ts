import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is getting finished');
    // return next.handle(req);
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'XYZ'),
    });
    return next.handle(modifiedRequest);
  }
}
