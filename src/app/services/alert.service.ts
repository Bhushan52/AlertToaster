import { Alert, AlertType } from './../models/alert';
import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {

    router.events.subscribe(event => {
  if(event instanceof NavigationStart){
    if(this.keepAfterRouteChange){
      this.keepAfterRouteChange = false;
    } else {
      this.clear();
    }
  }
    });
  }

  getAlerts(): Observable<any> {
    return this.subject.asObservable();
  }

  error(message: string, keepAfterRouteChange = false) {
   this.alert(AlertType.Error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, message, keepAfterRouteChange);
  }
  warning(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, message, keepAfterRouteChange);
  }
  success(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, message, keepAfterRouteChange);
  }
  clear() {
     // clear alerts
     this.subject.next();
  }

  alert(type: AlertType, message: string, keepAfterRouteChange = false) {

    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert> { type: type, message: message });
    }
  }

