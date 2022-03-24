import { Component, OnInit } from '@angular/core';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.sass']
})
export class AccessDeniedComponent implements OnInit {

  constructor() { }

  exclamationIcon = faExclamation;
  ngOnInit(): void {
  }

}
