import { Injectable } from "@angular/core";
import { AuthService } from "../model/auth.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


@Injectable()

export class AuthGuard{
    constructor(private router: Router, private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(!this.auth.authenticated){
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    }
}