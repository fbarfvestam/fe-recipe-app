import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userlist } from './userlist';
import { UserlistService } from './userlist.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent implements OnInit {
  Userlist: Userlist[] = [];
  create!: FormGroup;
  user: any;

  constructor(
    private Userlistservice: UserlistService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    this.create = new FormGroup({
      title: new FormControl('', [Validators.required]),
    });
    this.Userlistservice.showList().subscribe((res: any) => {
      this.Userlist = res;
      console.log(this.Userlist);
    });
    this.http
      .get(
        `https://recipeappfb.herokuapp.com/api/users/${localStorage.getItem(
          'id'
        )}`,
        { headers: headers }
      )
      .subscribe(
        (result) => (this.user = result),
        (err) => {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          this.router.navigate(['/login']);
        }
      );
  }

  createList() {
    console.log(this.create.value);
    this.Userlistservice.createList(this.create.value).subscribe((res: any) => {
      console.log('list created!');
      this.create.reset();
      window.location.reload();
    });
  }

  deleteList(id: number) {
    this.Userlistservice.deleteList(id).subscribe((res: any) => {
      this.Userlist = this.Userlist.filter((item) => item.id !== id);
      console.log('list deleted');
    });
  }
}
