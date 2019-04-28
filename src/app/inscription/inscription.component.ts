import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionform: FormGroup;

  constructor(fb: FormBuilder) {
    this.inscriptionform = fb.group(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          ]),
        FirstName: new FormControl('', [
          Validators.pattern('[a-zA-z]*'),
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),

        ]),
        LastName: new FormControl('',[
          Validators.pattern('[a-zA-z]*'),
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),

        ]),
        email: new FormControl('',[
          Validators.required,
          Validators.email,

        ]),
        tel: new FormControl('',[
          
          Validators.pattern('[2,5,9]{1}[0-9]{7}'),
        ]),

      }

    );
  }
  get password() { return this.inscriptionform.get('password') }
  inscription() {
    console.log(this.inscriptionform.value);

  }
  get FirstName() { return this.inscriptionform.get('FirstName') }
  inscriptionname() {
    console.log(this.inscriptionform.value);

  }
  get LastName() { return this.inscriptionform.get('LastName') }
  inscriptionprenom() {
    console.log(this.inscriptionform.value);

  }
  get email() { return this.inscriptionform.get('email') }
  inscriptionemail() {
    console.log(this.inscriptionform.value);

  }
  get tel() { return this.inscriptionform.get('tel') }
  inscriptiontel() {
    console.log(this.inscriptionform.value);

  }
  ngOnInit() {
  }

}
