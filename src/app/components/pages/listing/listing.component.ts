import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ConfirmboxComponent } from '../../shared/confirmbox/confirmbox.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  firstName: string;
  lastName: string;
  users: User[];

  constructor(
    private _userService : UserService,
    private _router : Router,
    private _dialogSetbice: NbDialogService
  ) { }

  ngOnInit(): void {
    this._userService.getAll()
                     .pipe(first())
                     .subscribe(users =>this.users = users);
  }
  toInfo(id : number){
    this._router.navigate([`info/${id}`])
  }
  toEdit(id : number){
    this._router.navigate([`edit/${id}`])
  }
  toDelete(id : number){
    let ref = this._dialogSetbice.open(ConfirmboxComponent, {
      context : {
       
      },
      closeOnBackdropClick : false
    });
    ref.onClose.subscribe(yesOrNo => {
      if(yesOrNo){
        this._userService.delete(id)
                        .pipe(first())
                        .subscribe(() => this.users = this.users.filter(x => x.id !==id));
        this._router.navigate([`/listing`]);

      }
    });
  }

}
