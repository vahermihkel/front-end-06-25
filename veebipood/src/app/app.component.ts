import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood';
}

// 1. 27.05 13.00 Angular algus, routing
// 2. 29.05 14.00 @if, (click), [(ngModel)], firebase
// 3. 03.06 14.00-15.30 kalkulaator
// 4. 05.06 kalkulaatori järk. array algus: @for, sort, filter
// 5. 10.06 ngOnInit, Service