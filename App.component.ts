import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration form';
  displayname='';
  displayaddress='';

  getValue(name:string, address:string){
    this.displayname=name;
    this.displayaddress=address;

  }
}