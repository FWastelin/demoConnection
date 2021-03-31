import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from '../models/newUser.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _client : HttpClient
  ) { }
  register(user : NewUser){//d'habitude on appelle la méthode add
    return this._client.post(`${environment.apiUrl}/Stagiaire`, user);
  }
  getAll(){
    return this._client.get<User[]>(`${environment.apiUrl}/Stagiaire`);
  }
  getById(id : number): Observable<User>{
    return this._client.get<User>(`${environment.apiUrl}/Stagiaire/${id}`);
  }
  update(id : number, user : NewUser){
    return this._client.put(`${environment.apiUrl}/Stagiaire/${id}`, user);
  }
  delete(id : number){
    return this._client.delete(`${environment.apiUrl}/Stagiaire/${id}`)
  }
}
