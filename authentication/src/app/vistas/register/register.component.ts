import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { MessageEmailService } from 'src/app/servicios/messageEmail/message-email.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSignedIn = false;
  hide = true;

  constructor(private service: AuthService, private router: Router, private messageService: MessageEmailService) { }

  formRegister = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    user: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {

  }

  async onRegister(){
    const{user, password} = this.formRegister.value;
    try{
      const userAux = await this.service.signUp(user, password);
      if(userAux){
        this.router.navigate(['/sendemail'])
        this.messageService.messageTitle = 'Congratulation !!';
        this.messageService.messageSubtitle = 'Thank you for Registering !';
      }
    }catch(error){
      console.log(error);
    }
  }

}
