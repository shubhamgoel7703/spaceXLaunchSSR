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
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",

        // 'Access-Control-Allow-Origin': '*'

      }),
      observe: 'response' as 'response'
    };
    return this.http.get<HttpResponse<Object>>(apiUrl, httpOptions).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }))
    // return this.http.get(environment.baseUrl + apiUrl, { observe: 'response' });
  }
}
