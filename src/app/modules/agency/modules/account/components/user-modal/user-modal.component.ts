import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { User } from '../../models/account.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  public formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.formUser = this.formBuilder.group({
      id: [0],
      idClient: [null, Validators.required],
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      checkPassword: [null, Validators.required],
      status: ['INACTIVE', Validators.required],
      type: ['USER', Validators.required]
    })
  }

  ngOnInit(): void {
    this.formUser.patchValue(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    let password = this.formUser.controls['password'].value;
    let checkPassword = this.formUser.controls['checkPassword'].value;
    console.log(this.formUser.value);

    if (!password) {
      Swal.fire('Error', 'se necesita ingresar una contraseña', 'error');
      return;
    }
    if (password != checkPassword) {
      Swal.fire('Error', 'las contraseñas no coinciden', 'error');
      return;
    }
    if (!this.formUser.valid) {
      Swal.fire('Error', 'Datos no validos', 'error');
      return;
    }
    let id = this.formUser.controls['id'].value;
    if (id != null && id != 0) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  updateUser(): void {
    this.userService.updateUser(this.formUser.value).subscribe(resp => {
      Swal.fire('Correcto', 'Usuario Actualizado', 'success');
      this.dialogRef.close();
    }, error => {
      Swal.fire('Error', 'Error al guardar', 'error');
      console.error(error);
    })
  }

  addUser(): void {
    this.userService.addUser(this.formUser.value).subscribe(resp => {
      Swal.fire('Correcto', 'Usuario Agregado', 'success');
      this.dialogRef.close();
    }, error => {
      Swal.fire('Error', 'Error al agregar Cliente', 'error');
      console.error(error);
    })
  }

}
