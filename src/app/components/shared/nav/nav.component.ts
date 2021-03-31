import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items : NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {link: '/home', title:"Home", icon:'home'},
      {link: '/login', title:"Login", icon:'person-outline'},
      {link: '/register', title:"Register", icon:'person-add-outline'},
      {link: '/listing', title:"Listing", icon:'people-outline'}
    ]
  }

}
