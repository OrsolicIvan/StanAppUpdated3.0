import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {} from 'jasmine';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { MatDialog } from '@angular/material/dialog';
import { RentModalComponent } from './modals/rent-modal/rent-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StanApp';
  users: any;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
    
  }
}
