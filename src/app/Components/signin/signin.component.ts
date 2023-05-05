import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginAdminData = {
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginAdmin() {
    this._auth.loginAdmin(this.loginAdminData).subscribe((res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('adminID', res.admin._id);
      this._router.navigate(['']);
    });
  }
}
