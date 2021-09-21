import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  sideNavExpanded = false;
  subscription: Subscription = new Subscription();

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.toggleSideBarEvent$.subscribe(isOpened => this.sideNavExpanded = isOpened);
  }

  expandOrShrinkSideNav(): void{
    this.sideNavExpanded = !this.sideNavExpanded;
    this.sharedService.toggleSideBarEvent$.next(this.sideNavExpanded);
  }

}
