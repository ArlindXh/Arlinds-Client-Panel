import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Injectable()

export class RegisterGuard implements CanActivate {
    constructor(
        private router: Router,
        private settingService: SettingsService
    ) { }

    // if registration is not allowed it will redirect us to the login
    canActivate(): boolean {
        if (this.settingService.getSettings().allowRegistration) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}