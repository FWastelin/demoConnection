import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  id : string;
  user : User;

  constructor(
    private _userService : UserService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._userService.getById(Number(this.id))
                    .subscribe(data => this.user = data);
  }
  toEdit(id : number){
    console.log(`edit/${id}`);
    this._router.navigate([`edit/${id}`])
  }

}
