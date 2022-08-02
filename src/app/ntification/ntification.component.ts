import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ntification',
  templateUrl: './ntification.component.html',
  styleUrls: ['./ntification.component.scss']
})
export class NtificationComponent implements OnInit {
  displayNotification: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.displayNotification = false;
  }

  onCloseNotification() {
    this.displayNotification = true;
  }
}
