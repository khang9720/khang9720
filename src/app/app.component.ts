import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testNgZorro'

  isCollapsed = false

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed
  }
}
