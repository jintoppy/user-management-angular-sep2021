import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg = '';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(ngForm: NgForm){
    console.log(ngForm.form.value);
    if(ngForm.valid){
      this.auth.login(ngForm.form.value)
        .subscribe(res => {
          if(res.msg){
            this.errorMsg = res.msg;
          }
          else {
            this.router.navigateByUrl('/');
          }
        })        
    }
  }

}
