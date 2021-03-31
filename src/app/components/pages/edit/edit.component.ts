import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id : string;
  fg: FormGroup;
  errorMessage : string;

  constructor(
    private _builder : FormBuilder,
    private _route : ActivatedRoute,
    private _router : Router,
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.id = this._route.snapshot.params['id'];
    console.log(this.id);
    this.fg = this._builder.group({
      email: ['',[Validators.required, Validators.email]],
      psm: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['', Validators.required]
    });
    this._userService.getById(Number(this.id))
        .subscribe(data => this.fg.patchValue(data));
  }
  onSubmit(){
    if(this.fg.invalid){
      return;
    }
    this._userService.update(Number(this.id),this.fg.value)
                    .subscribe({
                      next:()=>{
                        this._router.navigate(['/listing']);
                      },
                      error: error =>{
                        this.errorMessage = error;
                        console.log(this.errorMessage)
                      }
                    });
                    
  }

}
