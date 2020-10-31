
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators/tap";

import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService {
    constructor(public http: HttpClient){}
    
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
}