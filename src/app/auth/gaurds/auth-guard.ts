import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { tap, map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const oidc = inject(OidcSecurityService);
  const router = inject(Router);

  return oidc.isAuthenticated$.pipe(
    tap(({ isAuthenticated }) => {
      if (!isAuthenticated) {
        oidc.authorize();
      }
    }),
    map(({ isAuthenticated }) => isAuthenticated),
  );
};
