import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
// public countEven:number;
@Input() countEven:number;
  constructor() { }

  ngOnInit(): void {
  }
//  public getDataFromGameEven(event:any)
//   {
//       this.countEven=<number>event;
//       console.log('even works!');
//   }

}
