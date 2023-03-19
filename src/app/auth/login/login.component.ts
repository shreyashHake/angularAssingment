import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userdata: any;
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    sessionStorage.clear();
  }

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedlogin() {
    this.service.getUserbyId(this.loginform.value.username).subscribe(res => {
      this.userdata = res;
      console.log(this.userdata);
      if (this.userdata.password === this.loginform.value.password) {
        sessionStorage.setItem('username', this.userdata.id);
        sessionStorage.setItem('userrole', this.userdata.role);
        this.router.navigate(['']);
      } else {
        this.toastr.error('Invalid Credentials');
      }
    });

  }
}
