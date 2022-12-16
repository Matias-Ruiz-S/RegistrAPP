import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    let navigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/login'],navigationExtras);
  }

}
