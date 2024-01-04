import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public load = false;
  public formContact: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.formContact = this.fb.group({
      applicant: [null, Validators.required],
      contact: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  send() {
    if (this.formContact.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'DATOS INCOMPLETOS',
        text: 'Por favor revisa que todos los datos del formulario esten completos',
        timer: 2500
      });
      return;
    }

    this.load = true;

    const description = this.formContact.value.description
    this.formContact.controls['description'].setValue('Mensaje desde Xipatlani: \n' + description);

    this.contactService.sendToPanel(this.formContact.value).subscribe(data => {
      this.load = false;
      Swal.fire({
        icon: 'success',
        title: 'Gracias por contactarnos',
        text: 'Pronto nos comunicaremos contigo',
        timer: 2000
      });
    }, err => {
      this.load = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal, por favor intente mas tarde',
      });
      console.error(err);
    });
  }
}
