import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ivy-i18n';
  public message: string;

  ngOnInit(): void {
    this.message = $localize`:@@anId:a basic message`;
  }
}
