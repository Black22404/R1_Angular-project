import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  email: string = '';
onSearch: any;
searchText: any;

  subscribe(): void {
    console.log('Subscribed with email:', this.email);

  }
}