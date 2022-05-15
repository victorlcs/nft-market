import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from '../../data-access/header-data';
import { MenuItem } from '../../data-access/header-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTxt:string;
  placeHolderStr:string;
  menuItem:MenuItem[] = [];

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.placeHolderStr = 'Search items, collections, and accounts';
    this.menuItem = menuItem;
  }
  onSearch() {

  }

  onProfileClick() {
    this.route.navigate(['profile']);
  }
}
