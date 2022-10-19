import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  public display = true;
  public marks = 100;
  public clr = 'red';
  public names = ['Anh', 'Karina', 'Katie', 'Thu']
  constructor() { }

  ngOnInit(): void {
  }

}
