import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { MessageEmailService } from 'src/app/servicios/messageEmail/message-email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  hide = true;

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageEmailService) { }

  formLogin = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {

  }

  async onSubmit(){
    const{user, password} = this.formLogin.value;
    try{
      const userAux = await this.authService.logIn(user, password);
      if(userAux && userAux.user.emailVerified){
        this.router.navigate(['/info'])
      }else if(userAux){
        this.router.navigate(['/sendemail']);
        this.messageService.messageTitle = 'Advice !!'
        this.messageService.messageSubtitle = 'You need to confirm your email !!'
      }
    }catch(error){
      console.log(error)
    }
  }

  async onGoodleLogin(){
    try{
      const emailAux = await this.authService.loginGoodle();
      if(emailAux.credential){
        this.router.navigate(['/info'])
      }
    }catch(error){
      console.log(error)
    }
  }
}
