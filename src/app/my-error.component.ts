import { Component, Input, Host, SkipSelf } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'my-error',
  templateUrl: './my-error.component.html'
})
export class MyErrorComponent {

  @Input() controlName: string;
  @Input() errorKey: string;

  constructor(
    @Host() @SkipSelf() private form: FormGroupDirective
  ) {
  }

  get isInvalid() {
    let control = this.form.form.get(this.controlName);
    return control.hasError(this.errorKey) && (control.dirty || this.form.submitted);
  }

}