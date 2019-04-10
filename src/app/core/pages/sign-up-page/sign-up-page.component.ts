import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    person: new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
    })
  });
  
  isRegistrationSuccess: boolean;

  constructor() { }

  ngOnInit() {
  }

  async handleSubmit() {
    const formData = this.registerForm.getRawValue();
    console.log(formData);
    this.isRegistrationSuccess = true;
  }

}
