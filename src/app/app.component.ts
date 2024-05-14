import { Component, OnInit } from '@angular/core';

import { environment } from 'src/evironments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(environment.API_URL);
  }
  title = 'bdc-new';

}
