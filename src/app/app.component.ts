import { Component, OnInit } from '@angular/core';
import { environment} from 'src/environments/environment
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bdc-new';

  OnInit{
    console.log(enviroment.API_URL)
   console.log(environment.API_KEY)
  }
}
