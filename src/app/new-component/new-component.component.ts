import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  public name = "techwave";
  public date = new Date();
  public ename = "";
  public person =
    {
      "Firstname": "a",
      "Lastname": "b"
    }

  @Input() public childvalue: any;

  @Output() public childEvent = new EventEmitter();

  constructor() {
  }

  onclick(message: any) {
    this.childEvent.emit(message);// Assign the text to $event
  }

  onsubmit() {
    this.childEvent.emit(this.ename);

  }

  ngOnInit(): void {
  }

}
