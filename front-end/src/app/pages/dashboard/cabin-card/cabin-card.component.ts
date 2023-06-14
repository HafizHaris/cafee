import { Component, Input, OnInit } from '@angular/core';
import { Cabin } from 'src/app/models/cabin.model';


@Component({
  selector: 'app-cabin-card',
  templateUrl: './cabin-card.component.html',
  styleUrls: ['./cabin-card.component.css']
})
export class CabinCardComponent implements OnInit {

  @Input() cabin : Cabin = {} as Cabin;

  timer: string = "00:00:00";
  minutes = 0;
  hour = 0;
  seconds = 0;

  setTimer:string=""; 
  isStart:boolean=false;
  timerInterval:any;

  loader: boolean=true;


  constructor() { }
  
  ngOnInit(): void {
    setTimeout(()=>{
      this.loader = false;
    }, 2000);
  }


  start()
  {
      this.isStart=true;
        this.timerInterval=setInterval(() => {
       
        if (this.minutes > 59) { // to increment the hour value
          this.hour=this.hour+1;
          this.seconds=0;
          this.minutes=0;
        }
  
        if (this.seconds > 59) { // to calculate minutes
          this.minutes=this.minutes+1;
          this.seconds=0;
        }
        
        this.seconds=this.seconds+1;
        this.timer=`${this.hour}:${this.minutes}:${this.seconds}` //to get timer value in format MM:SS and HH:MM:SS 
        this.timer = this.timer.split(':').map(e => `0${e}`.slice(-2)).join(':')
      }, 1000)
  
    }


    pause() {
      this.isStart=false;
      this.setTimer=this.timer; 
      clearInterval(this.timerInterval);
    }

    stop(){
      this.isStart=false;
      this.timer="00:00:00";
      clearInterval(this.timerInterval);
    }

}
