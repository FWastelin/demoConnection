import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUserSubject: BehaviorSubject<User>; //pour garder les infos de pages en pages et voir si il est connecté et à quoi il a accés
  public currentUser : Observable<User>;

  constructor(
    private _client : HttpClient,
    private _router : Router,
  ) {
    //le usersubject récupére dans une var privé au format json l'utilisateur connecté
    this._currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //prend la valeur du currentUserSubject en temps qu'observable
    this.currentUser = this._currentUserSubject.asObservable();
  }

  public get curentUserValue():User{
    return this._currentUserSubject.value;
  }
  signIn(email : string, psw: string){
    return this._client.post<any>(`${environment.apiUrl}/login`, {email, psw})
    //il est impossible, on doit faire un import à la base, attention ici on fait un pipe car C#
                      .pipe(map(user =>{
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this._currentUserSubject.next(user);
                        return user;
                      }))
  }
  signOut(){
    //je retire l'utilisateur du localstorage
    localStorage.removeItem('currentUser');
    this._currentUserSubject.next(null);
    this._router.navigate(['home']);
  }
}
