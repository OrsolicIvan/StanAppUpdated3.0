import { Apartment } from 'src/app/_models/apartment';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { RentModalComponent } from '../rent-modal/rent-modal.component';



@Component({
  selector: 'app-rent-ap',
  templateUrl: './rent-ap.component.html',
  styleUrls: ['./rent-ap.component.css']
})
export class RentApComponent implements OnInit {
apartment:Apartment

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialogRef.open(RentModalComponent);
  }


}
