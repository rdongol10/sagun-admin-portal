import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../../theme-options';
import {AuthService} from '../../../../../../auth/service/auth.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {

  constructor(public globals: ThemeOptions, private service: AuthService) {
  }

  ngOnInit() {
  }

  logout(){
    this.service.logout();
  }

}
