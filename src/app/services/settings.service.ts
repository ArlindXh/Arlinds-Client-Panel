import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }

  constructor() {
    // we want the settings to be saved in local storage(browser)
    if (localStorage.getItem('settings') != null) {
      //local storage only holds strings so we use parse to convert the string  to an array of objects
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(): Settings {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    // we use stringify to convert the objects into strings
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
