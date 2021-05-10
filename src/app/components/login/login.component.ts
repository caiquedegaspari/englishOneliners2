
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

  hasError:boolean = false;
  input_classes:string = null;

  loginForm = this.fb.group({
    'email':['',[Validators.required,Validators.email]],
    'password':['',[Validators.required,Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this.router.navigateByUrl('/user-page')
    this.verifyInputs()
  }

  verifyInputs(){
    if(this.loginForm.controls.email.hasError){
      this.hasError = true
      this.input_classes = "error_input"
    } else{
      this.input_classes = null
      this.hasError = false
    }
  }
}
