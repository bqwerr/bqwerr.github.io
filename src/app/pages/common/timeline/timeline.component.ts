
import { Component, OnInit, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimeLineComponent implements OnInit {

  @Input() details: any;
  @Input() icon: string;
  
  constructor() { }

  ngOnInit() {
  }

}