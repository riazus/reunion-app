import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from './component/users/user-add-edit/user-add-edit.component';
import { UserListComponent } from './component/users/user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dialog: MatDialog) {}

  @ViewChild(UserListComponent) child!: UserListComponent;
  
  openUserAddEditForm() {
    const dialogRef = this._dialog.open(UserAddEditComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.child.getUserList();
      }
    })

  }
}
