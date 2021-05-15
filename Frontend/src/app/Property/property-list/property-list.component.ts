import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      "Id": 1,
      "Type": "House",
      "Name": "Tata Group",
      "Price": 15000
    },
    {
      "Id": 2,
      "Type": "Villa",
      "Name": "INFO Group",
      "Price": 15000
    },
    {
      "Id": 3,
      "Type": "House",
      "Name": "VELS Group",
      "Price": 15000
    },
    {
      "Id": 4,
      "Type": "Flat",
      "Name": "RMK Group",
      "Price": 15000
    },
    {
      "Id": 5,
      "Type": "Villa",
      "Name": "SRM Group",
      "Price": 15000
    },
    {
      "Id": 6,
      "Type": "House",
      "Name": "PK Group",
      "Price": 15000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
