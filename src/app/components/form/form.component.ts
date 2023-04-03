import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  contactForm: FormGroup;

  name = new FormControl('', [ Validators.required, Validators.minLength(2) ]);
  surname = new FormControl('', [ Validators.required, Validators.minLength(2) ]);
  email = new FormControl('', [ Validators.required, Validators.email ])
  subject = new FormControl('', [ Validators.required, Validators.minLength(6) ]);
  message = new FormControl('', [ Validators.required, Validators.maxLength(120) ]);

  constructor(public formBuilder: FormBuilder) {

    this.contactForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      email: this.email,
      subject: this.subject,
      message: this.message
    });

  }

  inputControlIsInvalid = (inputName: AbstractControl<any, any> | null): boolean => {
    return !!(inputName?.invalid && inputName.touched);
  }


  onSubmit(): void {
    const { name, surname, email, subject } = this.contactForm.value;
    alert(
      `Hola ${name + ' ' + surname}, recibimos tu consulta sobre ${subject} y nos estaremos contactando a la brevedad al mail ${email} para darle una respuesta, saludos!`
    );
    this.contactForm.reset();
  }
}
