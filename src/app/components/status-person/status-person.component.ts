import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPerson} from "../../interface";

@Component({
  selector: 'app-status-person',
  templateUrl: './status-person.component.html',
  styleUrls: ['./status-person.component.scss']
})
export class StatusPersonComponent  {

  constructor(public dialogRef: MatDialogRef<StatusPersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IPerson) { }

  saveDialog(item: IPerson): void{
    if(item.status === 'Alive') {
      item.status = 'Deceased'
    } else if(item.status === 'Deceased') {
      item.status = 'Alive'
    }
    this.dialogRef.close()
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

}
