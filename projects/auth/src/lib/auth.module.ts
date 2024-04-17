import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent, RegistrationComponent } from '../public-api';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RegistrationComponent, LoginComponent],
})
export class AuthModule {}
