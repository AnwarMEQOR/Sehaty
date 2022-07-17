import { Component, OnInit } from '@angular/core';

import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPrint = faPrint;

  constructor() { }

  ngOnInit(): void {
  }

}
