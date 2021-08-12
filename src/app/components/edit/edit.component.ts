import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IPerson} from "../../interface";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent{


  constructor(public dataRef: MatDialogRef<EditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IPerson) { }


  closeDialog() {
    this.dataRef.close()
  }


  /*getPersonDetail(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getId(id)
      .subscribe(item => this.item = item)
  }*/

}
