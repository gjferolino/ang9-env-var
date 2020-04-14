import { Component, OnInit } from '@angular/core';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private env: EnvService
  ) { 
      if(env.enableDebug) {
        console.log('Debug mode enabled!');
      }
    }

  ngOnInit(): void {
  }

}
