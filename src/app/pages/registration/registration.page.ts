import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
fname=""
lname=""
mname=""
cellnum=""
email=""
pass=""
conpass=""
  constructor() { }

  ngOnInit() {
  }

}
