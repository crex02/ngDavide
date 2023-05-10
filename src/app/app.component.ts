import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'davide';
  public firstName : string = 'Diego';


  constructor(){
    console.log('davide');
    
  }

  ngOnInit(){
    console.log('nhOninit');
    
  }
  ngAfterViewInit():void {
    console.log('ngAfterViewInit');
    
  }
  saySomething() {
    alert ('botton pressed');
  }
}
