import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

  title = 'Je t\'aime';

  constructor(private titleService: Title) { }

  ngOnInit() {
  }
 
  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
