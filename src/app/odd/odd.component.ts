import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
@Input() countOdd:number;
  constructor() { }

  ngOnInit(): void {
  }
  // getDataFromGameOdd(event:any)
  // {
  //     this.countOdd=<number>event;
  // }
}
