import { Component, OnInit } from '@angular/core';
import { ChanelsService } from '../../services/chanels.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent implements OnInit {
  public listMessage$ = this.chanelService.collection$;

  public message = {
    content: '',
    chanel: {
      "id" : ""
    }
  }

  constructor(private chanelService: ChanelsService) {
  this.chanelService.refreshCollection(4);
  }

  ngOnInit(): void {
  }

  public sendNewMessage(id: number, message: any): void {
    message = {
      content: this.message.content,
      chanel: id
    };

    this.chanelService.createNewMessage(message);
  }

}
