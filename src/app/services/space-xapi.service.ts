import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { BaseService } from './BaseService/base.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }


  getInitialList() {
    return new Promise((resolve, reject) => {
      try {
        let apiName = 'https://api.spacexdata.com/v3/launches?limit=100';
        this.getCall(apiName).subscribe((data) => {
          if (data != null && data != undefined) {
            resolve(data);
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        })
      } catch (error) {
        reject(error);
      }
    });
  }

  getFilteredList(launch_year, launch_success, land_success) {
    return new Promise((resolve, reject) => {
      try {
        let queryStringLaunchYear = (launch_year) ? '&launch_year=' + launch_year : '';
        let queryStringLaunchSuccess = (launch_success == true || launch_success == false) ? '&launch_success=' + launch_success : '';
        let queryStringLandSuccess = (land_success == true || land_success == false) ? '&land_success=' + land_success : '';
        //   console.log(queryStringLaunchYear, queryStringLaunchSuccess, queryStringLandSuccess);
        //  console.log("query param " + queryStringLaunchYear + queryStringLaunchSuccess + queryStringLandSuccess)
        let apiName = 'https://api.spacexdata.com/v3/launches?limit=100' + queryStringLaunchYear + queryStringLaunchSuccess + queryStringLandSuccess;
        this.getCall(apiName).subscribe((data) => {
          if (data != null && data != undefined) {
            resolve(data);
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        })
      } catch (error) {
        reject(error);
      }
    });
  }

}
