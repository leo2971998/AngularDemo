import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="techwave";
  public date=new Date();
  public ename="";
public person=
{
  "Firstname":"a",
  "Lastname":"b"
}

 @Input() public childvalue:any;

 @Output() public childEvent=new EventEmitter();
  constructor() { }
  onclick(msg:any)
  {
    this.childEvent.emit(msg);// Assign the text to $event
  }
  onsubmit()
  {
    this.childEvent.emit(this.ename);

  }


  ngOnInit(): void {
  }

}
