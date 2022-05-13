import { Adress } from './../_models/adress';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-buywindow',
  templateUrl: './buywindow.component.html',
  styleUrls: ['./buywindow.component.css']
})
export class BuywindowComponent implements OnInit {

  @Output() cancelAddress = new EventEmitter(); 
  model: any = {};

  constructor(public memberService:MembersService,private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register (){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }
  register2 (){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cancel (){
    this.cancelAddress.emit(false);
  }
  onSubmit(form:NgForm){
    this.insertAdress(form);
  }
  insertAdress(form:NgForm){
    this.memberService.postAdress().subscribe(
      res =>{
        this.memberService.formData = new Adress();
        this.toastr.success('Submitted successfully')
      },
      err =>{console.log(err);}
    );

  }
}
