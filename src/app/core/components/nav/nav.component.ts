import { Component, OnInit } from '@angular/core';
import { ChanelsService } from 'src/app/chanels/services/chanels.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  public listCanaux!: any[];

  constructor(private chanelService: ChanelsService) {
    this.chanelService.getAllChanels().subscribe((data)=>{
      this.listCanaux=data;
    })
  }

  ngOnInit(): void {}

  public getMessageById(id: number) {
    this.chanelService.getMessageByChanel(id).subscribe((data) =>{
      console.log(data);
    })
  }
}
