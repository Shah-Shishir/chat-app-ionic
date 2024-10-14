import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedRequest = req.clone({
    url: `${environment.apiUrl}/${req.url}`,
  });

  return next(modifiedRequest);
};
