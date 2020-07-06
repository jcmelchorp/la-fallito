import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import {
  faEllipsisV,
  faGlobe, faHome, faUser
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;
  @Output() logout = new EventEmitter<User>();
  dots = faEllipsisV;
  lang = faGlobe;
  home = faHome;
  userIcon = faUser;
  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
