import { Directive, Self, SkipSelf, Host } from '@angular/core';
import { NgControl, FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[MyInput]',
  host: {
    '[class.is-invalid]': 'isInvalid'
  }
})
export class MyInputDirective {

  constructor(
    @Host() @SkipSelf() private form: FormGroupDirective,
    @Self() private control: NgControl
  ) {
  }

  get isInvalid() {
    return this.control.invalid && (this.control.dirty || this.form.submitted);
  }

}