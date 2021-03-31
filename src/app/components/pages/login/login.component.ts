import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fg : FormGroup;
  errorMessage : string;
  isAuth : boolean;

  constructor(
    private _builder : FormBuilder,
    private _authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    const currentUser = this._authService.curentUserValue;
    if(currentUser){
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    this.fg = this._builder.group({
      email : ['', [Validators.required, Validators.email]],
      psw : ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.isAuth){
      this._authService.signOut();
    } else {
      const email = this.fg.get('email').value;
      const psw = this.fg.get('psw').value;
      this._authService.signIn(email, psw).subscribe(data =>{
        this._router.navigate(['/listing']);
      },
      error => {this.errorMessage = "Mauvais mots de passe"}
      );
    }
  }

}
