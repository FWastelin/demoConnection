import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fg : FormGroup;
  errorMessage : string;

  constructor(
    private _builder : FormBuilder,
    private _router : Router,
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      email: ['', [Validators.required, Validators.email]],
      psw: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.fg.invalid){
      return;
    }
    this._userService.register(this.fg.value)
                    .subscribe({
                      next: () =>{
                        this._router.navigate(['/login']);
                      },
                      error: error =>{
                        this.errorMessage = error;
                        console.log(this.errorMessage);
                      }
                    });
  }

}
