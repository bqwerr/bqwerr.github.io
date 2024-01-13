import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input()  project: any;
  @Output() hideProjectDetails = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  isProjectActive() {
    return this.project != null;
  }

  closeModal() {
    this.project = null;
    this.hideProjectDetails.emit(this.project);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  }

}
