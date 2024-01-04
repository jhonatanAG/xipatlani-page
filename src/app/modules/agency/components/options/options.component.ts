import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToRoute(route: string) {
    switch (route) {
      case 'hotels':
        this.confirmOpenHotels();
        break;
      case 'tours':
        this._router.navigate(['agency/tours']);
        break;
      case 'cars':
        window.open('https://xipatlani.com.mx/#/agency/cars', '_blank');
        break;
      case 'disney':
        window.open('https://www.bookingswl.com/?agentID=4626', '_blank');
        break;
      default:
        break;
    }
  }

  confirmOpenHotels() {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Version Beta',
      text: "La plataforma esta en desarrollo con datos de prueba, podra navegar de manera normal sin embargo las reservas que realice no seran reales. ¿Desea continuar?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Si, Continuar',
      cancelButtonText: 'No, Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('https://hermmes.com.mx/dev-hotels/#/home', '_blank');
      }
    })
  }
}
