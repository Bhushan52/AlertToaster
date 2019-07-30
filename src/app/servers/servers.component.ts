import { AlertService } from './../services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent  {

  constructor(private alertService: AlertService) { }

  success(message: string){
    this.alertService.success(message);
  }
  error(message: string){
    this.alertService.error(message);
  }
  info(message: string){
    this.alertService.info(message);
  }
  warning(message: string){
    this.alertService.warning(message);
  }
  clear(){
    this.alertService.clear();
  }
}
