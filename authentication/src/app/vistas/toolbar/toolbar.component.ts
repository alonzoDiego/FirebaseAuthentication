import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public user$: Observable<any> = this.authService.firebaseAuth.user;

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  openRegister(){
    this.dialog.open(RegisterComponent);
  }

  async onLogout(){
    try{
      await this.authService.logOut()
      this.router.navigate(['/login'])
    }catch(error){
      console.log(error)
    }
  }

}
