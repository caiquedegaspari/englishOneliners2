import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hasError:boolean = false;
  input_classes:string = null

  constructor(private fb:FormBuilder) { }

  registerForm = this.fb.group({
    'name':['',[Validators.required,Validators.minLength(3)]],
    'email':['',[Validators.required,Validators.email]],
    'password':['',[Validators.required,Validators.minLength(6)]],
  })

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registerForm.value)
  }

  verifyInputs(){
    if(this.registerForm.controls.email.hasError){
      this.hasError = true
      this.input_classes = "error_input"
    } else{
      this.input_classes = null
      this.hasError = false
    }
  }

}
