import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { AlertsService } from 'src/app/servicios/alerts/alerts.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private alert: AlertsService) { }

  userEmail = new FormControl('')

  ngOnInit(): void {
  }

  async onRequest(){
    const email = this.userEmail.value;

    try{
      await this.authService.resetPassword(email);
      this.alert.messageAlert('Email sent successfully!!')
      this.router.navigate(['/login']);

    }catch(error){
      console.log(error)
    }
  }

  onCancel(){
    this.router.navigate(['/login']);
  }

}
