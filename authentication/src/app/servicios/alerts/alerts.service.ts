import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private snak: MatSnackBar) { }

  configuration: MatSnackBarConfig={
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  messageAlert(message){
    this.configuration['panelClass'] = ['notif-alert'];
    this.snak.open(message, 'Close', this.configuration);
  }
}
