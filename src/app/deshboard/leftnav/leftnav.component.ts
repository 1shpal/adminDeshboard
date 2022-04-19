import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
@Output() toggledEvent:any=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggledAction(){
    this.toggledEvent.emit('');
  }

}
