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
        console.log(resp);
        for (let i = 0; i < resp.body.length; i++) {

          console.log("obj ", resp.body[i])

          let obj: any = {};
          obj.flight_number = resp.body[i].flight_number;
          obj.imageUrl = resp.body[i].links.mission_patch ? resp.body[i].links.mission_patch : '';
          obj.land_success = resp.body[i].rocket.first_stage.cores[0].land_success;
          obj.launch_success = resp.body[i].launch_success;
          obj.launch_year = resp.body[i].launch_year;
          obj.mission_id = resp.body[i].mission_id;
          obj.mission_name = resp.body[i].mission_name;

          // let randomNumber = Math.floor(Math.random() * 101);
          // let index = randomNumber > 50 ? 1 : 0;
          // obj.imageUrl = this.link[index];

          this.spaceXLaunchList.push(obj);
        }
        console.log(this.spaceXLaunchList);
        //  this.spaceXLaunchList = resp;
      }
    ).catch(
      error => {
        console.error("error ", error);
      }
    )
  }


  updateSpaceXLaunchListEvent(filteredSpaceXList) {
    this.spaceXLaunchList = filteredSpaceXList;
  }


}
