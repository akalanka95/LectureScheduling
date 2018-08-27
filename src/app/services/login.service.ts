import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {errorObject} from 'rxjs/internal/util/errorObject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendCredential(username: string, password: string) {
    const url = 'http://localhost:8080/token';
    const encodedCredentials = btoa(username + ':' + password);
    const basicHeader = 'Basic ' + encodedCredentials;
    return this.http.get(url, { headers: new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : basicHeader})
    });

  }

  checkSession() {
    const url = 'http://localhost:8080/checkSession';
    return this.http.get
    (url, { headers: new HttpHeaders({'x-auth-token' : localStorage.getItem('xAuthToken').valueOf().substring(10, 46) })
    });
    }

  logout() {
    const url = 'http://localhost:8080/user/logout';

    const  headers = new HttpHeaders ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }

}
