import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceXApiService } from '../../services/space-xapi.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  yearStart = 2006;
  yearEnd = 2020;
  yearsArray = [];

  currentSelectedYear;
  successfulLaunchFlag;
  successfulLandingFlag;

  filteredSpaceXLaunchList = [];

  @Output('returnFilteredListEvent')
  returnFilteredListEvent = new EventEmitter();

  constructor(private spaceXApiService: SpaceXApiService) { }

  ngOnInit() {
    for (let i = this.yearStart; i <= this.yearEnd; i++)
      this.yearsArray.push(i);
  }

  yearChangeEvent(selectedYear) {
    this.currentSelectedYear = selectedYear;
    this.getFilteredList();
  }

  successfulLaunchChangeEvent(successfulLaunchFlag) {
    console.log("successfulLaunchFlag ", successfulLaunchFlag);
    this.successfulLaunchFlag = successfulLaunchFlag;
    this.getFilteredList();
  }

  successfulLandingChangeEvent(successfulLandingFlag) {
    this.successfulLandingFlag = successfulLandingFlag;
    this.getFilteredList();
  }

  getFilteredList() {
    this.spaceXApiService.getFilteredList(this.currentSelectedYear, this.successfulLaunchFlag, this.successfulLandingFlag).then(
      (resp: any) => {
        console.log(resp);

        this.filteredSpaceXLaunchList = [];

        for (let i = 0; i < resp.length; i++) {

          console.log("obj ", resp[i])

          let obj: any = {};
          obj.flight_number = resp[i].flight_number;
          obj.imageUrl = resp[i].links.mission_patch;
          obj.land_success = resp[i].rocket.first_stage.cores[0].land_success;
          obj.launch_success = resp[i].launch_success;
          obj.launch_year = resp[i].launch_year;
          obj.mission_id = resp[i].mission_id;
          obj.mission_name = resp[i].mission_name;

          this.filteredSpaceXLaunchList.push(obj);
        }
        console.log("filteredSpaceXLaunchList ", this.filteredSpaceXLaunchList);

        this.returnFilteredListEvent.emit(this.filteredSpaceXLaunchList);
        //  this.spaceXLaunchList = resp;
      }
    )
      .catch(
        error => {
          console.error("error ", error);
        }
      )
  }

}
