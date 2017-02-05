import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BaseServiceService {

  constructor(protected http: Http) { }

  
    public fetchGet(url:string) : Observable<any> {
            return this.http.get(url)
                        .map(this.handleSuccess)
                        .catch(this.handleError)
                        
    }

    protected handleSuccess(res: Response) {
        return res.json() || {};
    }

    protected handleError(error: Response | any): any {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else if (error) {
            errMsg = error.message ? error.message : error.toString();
        } else {
            errMsg = 'server error';
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
