import { Component, OnInit } from '@angular/core';
import { UserLogged } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public currentUser: UserLogged;

  constructor(authService: AuthService) {
    this.currentUser = authService.getCurrentUser();
  }

  ngOnInit(): void {
  }

}
