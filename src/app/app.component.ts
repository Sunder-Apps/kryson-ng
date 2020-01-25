import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BackgroundService } from './background/background.service';
import { SettingsService } from './settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    private router:Router,
    private backgroundService:BackgroundService,
    private settingsService:SettingsService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.backgroundService.trigger()
      }
    })
    this.settingsService.settings.subscribe(settings => {
      if (settings) {
          //this.theme = settings.theme
          //this.snap = !settings.animations
      } 
    })
  }
}