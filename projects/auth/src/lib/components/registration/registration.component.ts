import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bcrypt from 'bcryptjs';
import { Credentials } from '../../interfaces/credentials.interface';
import { strongPasswordRegx } from '../../constants/regex-password.constant';

@Component({
  selector: 'lib-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  @Output() sendRegistrationCredentials = new EventEmitter<Credentials>();

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.pattern(strongPasswordRegx)],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  get username() {
    return this.registrationForm.get('username');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  register(): void {
    if (this.password.value !== this.confirmPassword.value) {
      console.error("Passwords don't match");
      return;
    }

    if (this.registrationForm.valid) {
      const hashedPassword = bcrypt.hashSync(this.password.value, 10);

      const credentials: Credentials = {
        username: this.username.value,
        password: hashedPassword,
      };

      this.sendRegistrationCredentials.emit(credentials);

      this.registrationForm.reset();
    }
  }
}
