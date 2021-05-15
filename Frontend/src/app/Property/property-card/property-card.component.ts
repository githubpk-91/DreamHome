import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  Property: any = {
    "Id": 1,
    "Type": "House",
    "Name": "Tata Group",
    "Price": 15000
  }
  constructor() { }

  ngOnInit() {

  }

}
