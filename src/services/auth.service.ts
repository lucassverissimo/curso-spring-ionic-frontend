
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators/tap";

import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService {
    constructor(public http: HttpClient, public storage: StorageService){}
    
    authenticate(creds: CredenciaisDTO): Observable<any> {
        return this.http
          .post(`${API_CONFIG.baseUrl}/login`, creds, {
            observe: 'response',
            responseType: 'text',
          })
          .pipe(
            tap((_) => console.log('login'))
          );
      }

      successfulLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
      }

      logout(){
          this.storage.setLocalUser(null);
      }
}