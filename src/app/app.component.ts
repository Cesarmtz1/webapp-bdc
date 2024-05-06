import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bdc-new';

  OnInit{
    console.log($enviroment.API_URL)
   console.log($enviroment.API_KEY)
  }
}
