import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { MessageEmailService } from 'src/app/servicios/messageEmail/message-email.service';
import { AlertsService } from 'src/app/servicios/alerts/alerts.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  public user$: Observable<any> = this.authService.firebaseAuth.user;
  flag1: string = 'messsage';
  flag2: string = 'messsage';

  constructor(private authService: AuthService,
              public messageService: MessageEmailService,
              private alert: AlertsService) { }

  ngOnInit(): void {
  }

  onSendEmail(){
    this.authService.sendVerificationEmail();
    this.alert.messageAlert('Email sent successfully!!')
  }
}
