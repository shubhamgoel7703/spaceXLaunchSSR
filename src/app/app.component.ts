import { Component, OnInit } from '@angular/core';
import { SpaceXApiService } from './services/space-xapi.service';
import { ISpaceXLaunchObject } from './interfaces/ISpaceXLaunchObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceX Launch Programs';

  spaceXLaunchList: ISpaceXLaunchObject[] = [];

  // link = ["https://img.favpng.com/4/18/20/kennedy-space-center-launch-complex-39-spacex-crs-1-bulgariasat-1-falcon-9-png-favpng-PQUf074yNNWdrHxXevDTXxN8z.jpg",
  //   "https://www.seradata.com/SSI/wp-content/uploads/2014/01/SpaceX-Logo-620x149.jpg"]

  constructor(private spaceXApiService: SpaceXApiService) {
  }

  ngOnInit() {



    this.spaceXApiService.getInitialList().then(
      (resp: any) => {

        for (let i = 0; i < 8; i++) {
          this.spaceXLaunchList.push(this.creatingSpaceXObject(resp.body[i]));
        }

        let tempSpaceXLaunchList = [];

        for (let i = 8; i < resp.body.length; i++) {
          tempSpaceXLaunchList.push(this.creatingSpaceXObject(resp.body[i]));
        }

        this.spaceXLaunchList = [...this.spaceXLaunchList, ...tempSpaceXLaunchList];

      }
    ).catch(
      error => {
        console.error("error ", error);
      }
    )
  }


  //resp.body[i]
  creatingSpaceXObject(object) {
    let obj: any = {};
    obj.flight_number = object.flight_number;
    obj.imageUrl = object.links.mission_patch ? object.links.mission_patch : '';
    obj.land_success = object.rocket.first_stage.cores[0].land_success;
    obj.launch_success = object.launch_success;
    obj.launch_year = object.launch_year;
    obj.mission_id = object.mission_id;
    obj.mission_name = object.mission_name;
    return obj;
  }

  updateSpaceXLaunchListEvent(filteredSpaceXList) {
    this.spaceXLaunchList = filteredSpaceXList;
  }


}
