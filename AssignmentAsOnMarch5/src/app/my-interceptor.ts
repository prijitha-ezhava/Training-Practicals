import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let token = sessionStorage.getItem('token')
       
        // modifiedReq = req.clone({
        //     headers: req.headers.set("Content-Type","json"),
        // });

        req = req.clone({
            headers: req.headers.set("Content-Type","json"),
        });
        
       req = req.clone({
            headers: req.headers.append("Authorization",'Bearear-' +token),
       });

    //    return next.handle(modifiedReq);
       return next.handle(req);

    }

}
