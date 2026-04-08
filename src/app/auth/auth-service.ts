import { inject, Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly oidc = inject(OidcSecurityService);

  login(): void {
    this.oidc.authorize();
  }

  logout(): void {
    this.oidc.logoff().subscribe();
  }

  checkAuth() {
    return this.oidc.checkAuth();
  }

  isAuthenticated() {
    return this.oidc.isAuthenticated$;
  }

  userData() {
    return this.oidc.userData$;
  }

  accessToken() {
    return this.oidc.getAccessToken();
  }
}
