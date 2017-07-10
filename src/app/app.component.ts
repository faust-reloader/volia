import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { HttpService } from '/services/aseqwe';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})


export class AppComponent {
  posts;
  
  constructor(public: httpService: HttpService) {
  }
  
 ngOnInit() {
  this.httpService.getData()
  .subscribe(res => this.posts = res);
} 
  
  



onDeactivate() {
    document.body.scrollTop = 0;
  }
  //public constructor(private titleService: Title ) { }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
