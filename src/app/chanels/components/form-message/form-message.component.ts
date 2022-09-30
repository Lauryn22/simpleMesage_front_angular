import { Component, OnInit } from '@angular/core';
import { ChanelsService } from '../../services/chanels.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {




  constructor(private chanelService: ChanelsService) {  }


  ngOnInit(): void {
  }

}
