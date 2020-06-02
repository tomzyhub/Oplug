import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { NotificationService } from "./notification.service";
@Injectable({
  providedIn: "root",
})
export class SecureInnerPageGuard implements CanActivate {
  constructor(
    private router: Router,
    private authservice: AuthService,
    private message: NotificationService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authservice.isLoggedIn) {
      this.message.success("You are not allowed to access this URL!");
      this.router.navigate(["dashboard"]);
    }
    return true;
  }
}
