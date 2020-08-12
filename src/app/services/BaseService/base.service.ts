import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';

// {providedIn: 'root'}
@Injectable()
export class BaseService {

  constructor(
    public http: HttpClient,
  ) {
  }

  getCall(apiUrl): Observable<HttpResponse<Object>> {
    return this.http.get<HttpResponse<Object>>(apiUrl).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }))
    // return this.http.get(environment.baseUrl + apiUrl, { observe: 'response' });
  }
}
