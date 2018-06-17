import { Injectable } from '@angular/core';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

import { ErrorService } from '../../services/error.service'
import * as curconnamespace from '../../model/curconnamespace';
import {AuthService} from '../../providers/auth.service';
import * as myGlobals from '../../globals';

@Injectable()
export class LeerdoelenService {
  constructor(private http: HttpClient) {
    console.log('LeerdoelenService Initialized...');
  }

  getLeerdoelen(header) {
    return this.http.get<curconnamespace.CurconNameSpace.LeerdoelOverzichtDto>(myGlobals.baseUrl+'leerdoelen/', header)
      .pipe( tap( res => console.log(res)) );
  }

  getLeerdoelenByObject(obj, header) {
    console.log(obj.href);
    return this.http.get<curconnamespace.CurconNameSpace.LeerdoelOverzichtDto>(obj.href)
      .pipe( tap( res => console.log(res)) );
  }

  getDataByHref(href, header) {
    return this.http.get<curconnamespace.CurconNameSpace.LeerdoelOverzichtDto>(href)
      .pipe( tap( res => console.log(res)) );
  }
}