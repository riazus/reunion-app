import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _userService: UsersService, 
    private _dialogRef: MatDialogRef<UserAddEditComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: User
    ) {
    this.userForm = this._fb.group({
      name: ''
    })
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this._userService.updateUser(this.data.id, {id: this.data.id, name: this.userForm.value.name})
        .subscribe({
          next: (user) => {
            this._coreService.openSnackBar('User details updated successfully', 'OK')
            this._dialogRef.close(true);
          },
          error: (error) => {
            console.log(error);
          }
        });
      } else {
        this._userService.addUser({id:'', name: this.userForm.value.name})
        .subscribe({
          next: (user) => {
            this._coreService.openSnackBar('New user added successfully', 'OK')
            this._dialogRef.close(true);
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    }
  }
}
