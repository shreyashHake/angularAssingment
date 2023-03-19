import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  current: any;

  registerform = this.builder.group({
    id: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.builder.control('', Validators.required),
    password: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ])
    ),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    gender: this.builder.control('male'),
  });
  proceedregister() {
    if (this.registerform.valid) {
      this.service.registerUser(this.registerform.value).subscribe((result) => {
        this.toastr.success('Registered successfully');
        this.router.navigate(['login']);
      });
    } else {
      this.current = this.registerform.value;
      if (
        this.current.id === '' ||
        this.current.name === '' ||
        this.current.email === '' ||
        this.current.password === ''
      ) {
        this.toastr.error('All fields are required');
      }
      else {
        this.toastr.warning('Username must have 5 characters');
        this.toastr.warning('Password must have 8 charcter(At least 1 Uppercase, 1 lowercase, 1 numbeer, 1 symbol)');
        this.toastr.warning('Email should be valid');
        this.toastr.error('There is some problem form below : ⬇⬇')
      }
    }
  }
}
