import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionform: FormGroup;

  constructor(fb: FormBuilder) {
    this.connexionform = fb.group(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]*[@]{1}'),
          
                ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          

        ]),
      }

    );
  }
  get password() { return this.connexionform.get('password') }
  inscription() {
    console.log(this.connexionform.value);

}
get email() { return this.connexionform.get('email') }
inscriptionemaile() {
  console.log(this.connexionform.value);

}

  ngOnInit() {
  }

}
