import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from './public.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  public loggedIn!: boolean;

  constructor(private router: Router,
              private publicService: PublicService) { }

  ngOnInit(): void {
      this.loggedIn = localStorage.getItem('token') !== null;
    }

    signOut() {
      this.publicService.signOut().subscribe((res:any)=>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        this.router.navigate(['/login'])
        window.location.reload();
    })
 }
}
