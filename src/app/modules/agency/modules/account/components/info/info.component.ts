import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import Swal from 'sweetalert2';
import { Client } from '../../models/account.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public client!: Client;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    this.accountService.getAccountInfo().subscribe(data => {
      this.client = data;
    }, err => {
      Swal.fire('Error', 'error al obtener datos', 'error');
      console.error(err);
    });
  }

}
