import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-item',
  templateUrl: './main-page-item.component.html',
  styleUrls: ['./main-page-item.component.css']
})
export class MainPageItemComponent implements OnInit {

  @Input('spaceXLaunchObject')
  spaceXLaunchObject;

  // link = ["https://img.favpng.com/4/18/20/kennedy-space-center-launch-complex-39-spacex-crs-1-bulgariasat-1-falcon-9-png-favpng-PQUf074yNNWdrHxXevDTXxN8z.jpg",
  //   "https://www.seradata.com/SSI/wp-content/uploads/2014/01/SpaceX-Logo-620x149.jpg"]
  // src;
  constructor() { }

  ngOnInit() {
    // let randomNumber = Math.floor(Math.random() * 101);
    // let index = randomNumber > 50 ? 1 : 0;
    // this.src = this.link[index];
  }

}
