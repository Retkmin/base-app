import { HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpRequest, HttpUserEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AbstractHttpInterceptor } from '../helpers/abstract-http-interceptor';
import { LoginService } from '../services/menu/login.service';

@Injectable()
export class TokenizedInterceptor extends AbstractHttpInterceptor {
    
    constructor(private loginService: LoginService,
                private router: Router) { 
        super();
    }

    protected isOauth(): boolean {
        return false;
    }
    protected interceptInternal(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        const accessToken = localStorage.getItem('access_token');

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }

        return next.handle(req).pipe(
            catchError((error: Response) => this.handleError(error, req, next))
        ) as any;
    }

    private handleError(error: Response, req: HttpRequest<any>, next: HttpHandler) {
        console.error(error);

        if (error.status === 401) {

            return this.loginService.refreshToken().pipe(
                mergeMap((response: any) => {
                    req.headers.delete('Authorization');
                    return this.intercept(req, next);
                }),
                catchError((err: any) => {
                    console.error(err);
                    this.router.navigate(['/login']);
                    return of();
                })
            );
        }

        return throwError(() => error);
    }
}
