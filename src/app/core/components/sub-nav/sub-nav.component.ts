import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuItemTypes } from '../../interface/api';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  @Input() menu: MenuItemTypes;
  menuSelection = MenuItemTypes;
  routerSubscription: Subscription;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._setMenu(this._router.url);

    this.routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this._setMenu(event.url);
      }
    });
  }

  private _setMenu(url: string) {
    if (url.indexOf('/users') !== -1) {
      this.menu = MenuItemTypes.USERS;
    } else if (url.indexOf('/posts') !== -1) {
      this.menu = MenuItemTypes.POSTS;
    } else if (url.indexOf('/search') !== -1) {
      this.menu = MenuItemTypes.SEARCH;
    } else {
      this.menu = MenuItemTypes.VACANCY;
    }
  }


}
