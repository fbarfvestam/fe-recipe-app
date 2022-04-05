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

  constructor(private Userlistservice: UserlistService, private router:Router) {}

  ngOnInit(): void {
    this.create=new FormGroup({
      title:new FormControl('', [Validators.required])
    });
  }

  createList() {
    console.log(this.create.value);
    this.Userlistservice.createList(this.create.value).subscribe((res:any)=>{
      console.log('list created!');
      this.create.reset();
      
    })
  }
}
