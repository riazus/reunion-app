import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UsersService, 
    private _dialog: MatDialog,
    private _coreService: CoreService
    ) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(id: string) {
    
    this.userService.deleteUser(id)
    .subscribe({
      next: () => {
        this._coreService.openSnackBar('User deleted', 'Undo');
        this.getUserList();
      },
      error: console.log
    });
  }

  openEditForm(data: User) {
    const dialogRef = this._dialog.open(UserAddEditComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getUserList();
      }
    })
  }
}

