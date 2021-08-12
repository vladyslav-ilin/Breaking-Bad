import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IPerson} from "../../interface";

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent{

  constructor(public dialogRef: MatDialogRef<DetailPersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IPerson) { }



  closeDialog(): void {
    this.dialogRef.close()
  }

}
