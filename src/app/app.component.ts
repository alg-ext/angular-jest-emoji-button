import { Component } from '@angular/core';
import { EmojiButton } from '@joeattardi/emoji-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jest-emoji-button';

  picker = new EmojiButton();
}
