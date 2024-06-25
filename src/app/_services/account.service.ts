import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../_models/user';
import { map } from 'rxjs/operators';
import { loginModel } from '../_models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private http: HttpClient) { }

baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<user>(1);
  currentUser$ = this.currentUserSource.asObservable();

  login(model: loginModel) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        const user = response;
        this.setCurrentUser(user);
       })
    );

  }
  setCurrentUser(user: user) {
  
    user.roles = [];
    const roles = this.getDecodedToken(user.Token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);

   
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);
    
  }
  getDecodedToken(token:any) { return JSON.parse(atob(token.split('.')[1])); }


  
}
