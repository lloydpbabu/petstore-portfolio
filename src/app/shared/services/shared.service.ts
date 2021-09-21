import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isSideBarOpen = false;

  toggleSideBarEvent$: BehaviorSubject<boolean> = new BehaviorSubject(this.isSideBarOpen);

  constructor() {

   }
}
