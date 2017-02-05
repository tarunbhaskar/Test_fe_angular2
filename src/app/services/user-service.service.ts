import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { BaseServiceService } from './base-service.service';


@Injectable()
export class UserServiceService extends BaseServiceService {

  constructor(protected http: Http) { 
  	super(http);
  }

}
