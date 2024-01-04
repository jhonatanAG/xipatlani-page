import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LSKeys } from 'src/app/global/keys';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public formUser: FormGroup;
  public showLoad: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['agency']);
    }

    this.formUser = this.formBuilder.group({
      password: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  send() {
    this.showLoad = true;
    let email = this.formUser.controls['email'].value;
    let password = this.formUser.controls['password'].value;
    this.authService.login(email, password).subscribe({
      next: (res) => {
        this.showLoad = false;
        if (res.token != null || res.token != '') {
          localStorage.setItem(LSKeys.auth_token, res.token)
          localStorage.setItem(LSKeys.user_data, JSON.stringify(res));
          this.router.navigate(['agency']);
        } else {
          console.error('error al leer el token');
          console.error(res);
        }
      },
      error: (err) => {
        this.showLoad = false;
        alert('Usuario o contraseña incorrectos. Intentelo nuevamente');
        console.error(err);
      }
    })
  }

}
