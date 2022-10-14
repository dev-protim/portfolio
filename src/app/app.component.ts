import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isLoader: boolean = true;

  ngAfterViewInit(): void {
    const html: any = document.querySelector("html");
    html.classList.add("loaded");
  }
}
