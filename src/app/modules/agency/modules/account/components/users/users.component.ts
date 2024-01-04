import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Client, User } from '../../models/account.model';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { UserLogged } from 'src/app/models/auth.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public client!: Client;
  public currentUser: UserLogged;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private accountService: AccountService,
    authService: AuthService
  ) {
    this.currentUser = authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    this.accountService.getAccountInfo().subscribe(data => {
      this.client = data;
      this.getUsers();
    }, err => {
      Swal.fire('Error', 'error al obtener datos', 'error');
      console.error(err);
    });
  }

  openModalUser(user?: User) {
    let usr: User;
    if (user) {
      usr = user;
      usr.idClient = +this.client.id;
    } else {
      usr = {
        email: '',
        lastName: '',
        name: '',
        status: 'ACTIVE',
        type: 'USER',
        idClient: +this.client.id
      };
    }
    const dialogRef = this.dialog.open(UserModalComponent, {
      height: '700px',
      width: '700px',
      disableClose: true,
      data: usr
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  getUsers() {
    this.users = [];
    this.userService.getUsersByClient(+this.client.id).subscribe(data => {
      this.users = data;
    }, err => {
      console.error(err);
      Swal.fire('Error', 'error al cargar cliente', 'error');
    });
  }

  deleteUser(id: number = 0) {
    Swal.fire({
      title: 'Eliminar el Usuario?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(response => {
          this.getUsers();
        }, error => {
          Swal.fire('Error', 'error al borrar usuario', 'error');
          console.error(error);
        });
        Swal.fire(
          'Eliminado!',
          'Usuario Eliminado.',
          'success'
        );
      }
    });
  }
}
