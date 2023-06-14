import { Component, OnInit } from '@angular/core';
import { Cabin } from 'src/app/models/cabin.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cabins : Cabin[] = [];
  loader: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.loader = false;
    }, 2000);

    this.cabins = [
    {
      id: 115,
      cabinNumber: 1,
      session : {
        id: 125
      }
    },
    {
      id: 215,
      cabinNumber: 2,
      session : {
        id: 125
      }
    },
    {
      id: 315,
      cabinNumber: 3,
      session : {
        id: 125
      }
    },
    {
      id: 415,
      cabinNumber: 4,
      session : {
        id: 125
      }
    },
    {
      id: 515,
      cabinNumber: 5,
      session : {
        id: 125
      }
    },
    {
      id: 615,
      cabinNumber: 6,
      session : {
        id: 125
      }
    },
    {
      id: 715,
      cabinNumber: 7,
      session : {
        id: 125
      }
    },
    {
      id: 815,
      cabinNumber: 8,
      session : {
        id: 125
      }
    },
    {
      id: 915,
      cabinNumber: 9,
      session : {
        id: 125
      }
    },
    {
      id: 815,
      cabinNumber: 10,
      session : {
        id: 125
      }
    },
  ];
  }

}
