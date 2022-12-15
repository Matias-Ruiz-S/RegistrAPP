import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoLoginGuard implements CanActivate {
  constructor(private router:Router){}
  user={
    usuario:"",
    password:""
  }

  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    
    if (this.user.usuario = "") {
  
      this.router.navigate(['/login']);
      
      return false;
    }

    return true;

    
  }
  
  
}

