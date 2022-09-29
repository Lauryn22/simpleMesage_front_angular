import { Component, OnInit } from '@angular/core';
import { ChanelsService } from '../../services/chanels.service';

@Component({
  selector: 'app-page-add-chanel',
  templateUrl: './page-add-chanel.component.html',
  styleUrls: ['./page-add-chanel.component.scss']
})
export class PageAddChanelComponent implements OnInit {

  chanel = {
    name: '',
    description: '',
    messages: []
  }

  constructor(private chanelService: ChanelsService) { }

  ngOnInit(): void {
  }

  public addChanel(): void {
    const data = {
      name: this.chanel.name,
      description: this.chanel.description,
      messages: this.chanel.messages
    };

    this.chanelService.createNewChanel(data).subscribe(response =>{
      console.log(response);

    });

  }

}
