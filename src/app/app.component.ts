import { AfterViewInit, Component, DoCheck, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, AfterViewInit{
  title = 'newTask';
  ismenurequired=false;

  @ViewChild('drawer', {static: false}) drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router) {}

  ngDoCheck(): void {
    let curr = this.router.url;
    if (curr === '/login' || curr === '/register') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
  }
  ngAfterViewInit(): void {
    this.drawer.toggle();
  }


}
