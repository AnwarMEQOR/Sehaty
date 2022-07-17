import { Component, OnInit } from '@angular/core';

import { faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faLock = faLock;
  faEyeSlash = faEyeSlash;

  constructor() { }

  ngOnInit(): void {
  }

}
