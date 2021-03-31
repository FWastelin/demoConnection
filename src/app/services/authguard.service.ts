import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
//authguard = celui qui te limite l'accés au page
export class AuthguardService implements CanActivate {

  constructor(
    private _router : Router,
    private _authService : AuthService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const currentUser = this._authService.curentUserValue;
    if(currentUser){
      return true;
    }else {
      //si on est pas connecté, retour à la page connexion
      this._router.navigate(['/login']);
      return false;
    }
  }
}
