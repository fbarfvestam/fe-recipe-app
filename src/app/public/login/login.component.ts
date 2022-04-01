import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private publicService:PublicService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const signinData = this.form.getRawValue();
    const data = {
      email: signinData.email,
      password: signinData.password,
    }
    this.publicService.login(data).subscribe((res:any)=>{
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
    });
 }
}