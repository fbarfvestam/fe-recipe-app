import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  submit() {
    const formData = this.form.getRawValue();
    if (formData.password === formData.confirm_password) {
      this.http
        .post('https://recipeappfb.herokuapp.com/api/register', formData)
        .subscribe(
          (result) => {
            console.log(result);
            this.router.navigate(['/']);
          },
          (err) => console.log(err)
        );
    } else {
      this.errorMessage = "Passwords don't match";
    }
  }
}
