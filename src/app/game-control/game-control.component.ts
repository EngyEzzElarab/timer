import { Component, OnInit ,OnDestroy, Output,EventEmitter, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit,OnDestroy {
public counter:number=1;
@Output() public counterEvent=new EventEmitter<number>();;
@ViewChild('ref') public ref;
 myVar;
  

  constructor() { }

  ngOnInit(): void {
  }
  onStart()
  {
    this.myVar=  setInterval(()=>{
    this.counterEvent.emit(this.counter);
    this.counter++;
    },1000);
   
    
   }
  ngOnDestroy()
  {
    
  }
  onStop()
  {
    clearInterval(this.myVar);
  }
  
}
