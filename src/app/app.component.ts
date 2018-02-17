import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup;

  // Inject FormBuilder and use it to create FormGroup, FormControl, and FormArray.
  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // Create the password field separately so we can pass it to our custom validator.
    let passwordControl = this.formBuilder.control('', [Validators.required, Validators.minLength(6)]);

    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: passwordControl,
      // We pass the password field to compare with password confirm field.
      passwordConfirm: ['', [this.validatePasswordConfirm(passwordControl)]]
    });
  }

  // Accept an instance of FormControl to match against the FormControl it is validating.
  validatePasswordConfirm(passwordControl: FormControl) {
    return (passwordConfirmControl: FormControl) => {

      // Whenever the passwordControl changes, we update the value and validity or passwordConfirmControl.
      passwordControl.valueChanges.subscribe(() => {
        passwordConfirmControl.updateValueAndValidity();
      });

      // If the 2 fields' values are not equal then we return an error.
      if (passwordConfirmControl.value != passwordControl.value) {
        return {
          validatePasswordConfirm: {
            valid: false
          }
        }
      }
    };
  }

}