import { Component } from '@angular/core';
import { Message } from '../chat.models';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = [
    { role: 'assistant', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'user', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'assistant', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'user', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'assistant', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'user', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'assistant', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'user', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'assistant', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
    { role: 'user', content: 'asdas asdasd asdasd asdasd asdasd asdasd' },
  ];
}
