import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit,AfterViewInit {

  opensideBar = false;
  @ViewChild('sidebarDrawer') sidebarDrawer!: MatDrawer;
  subscription: Subscription = new Subscription();
  constructor(private sharedService: SharedService) { }

  ngAfterViewInit(): void{
    this.sidebarDrawer.openedStart.subscribe(()=> this.sharedService.toggleSideBarEvent$.next(true));
    this.sidebarDrawer.closedStart.subscribe(()=> this.sharedService.toggleSideBarEvent$.next(false));
  }

  ngOnInit(): void {

    this.subscription.add(this.sharedService.toggleSideBarEvent$.subscribe(x => this.opensideBar = x));

  }

}
