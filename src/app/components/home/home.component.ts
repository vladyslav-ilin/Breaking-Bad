import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {IPerson} from "../../interface";
import {LoadingService} from "../../services/loading.service";
import {MatDialog} from '@angular/material/dialog';
import {DetailPersonComponent} from "../detail-person/detail-person.component";
import {EditComponent} from "../edit/edit.component";
import {StatusPersonComponent} from "../status-person/status-person.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public details: IPerson[] = [];
  public listLength: number = 0;
  public itemsPerPage: number = 4;
  public loading: boolean = false;

  constructor(private loginService: LoginService,
              private loadingService: LoadingService,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getInfo();
  }

  public getInfo(): void {
    this.loading = this.loadingService.start();

       this.loginService.getYourPerson().subscribe((details: IPerson[]) => {
         // Отримуємо результат з localStorage
         let localPerson = this.loginService.getMyPersonStorage();
           console.log(localPerson);

           this.details = [...localPerson, ...details];
          console.log(details);
          this.listLength = details.length;
          this.loading = this.loadingService.stop();

         },
         error => alert('Something went wrong'))

  }


  selectedPerson?: IPerson;
  editPerson(item: IPerson) {
    this.selectedPerson = item;
  }

  detailPerson(item: IPerson): void {
    const dialogRef = this.dialog.open(DetailPersonComponent, {
      width: '500px',
      data: item,
    });
  }



  updatePerson(person?: IPerson): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      data: person || {}
    })

    dialogRef.afterClosed().subscribe((text: IPerson) =>{
      if(!text) {
        return;
      }
      if(!text.char_id) {
        text.char_id  = this.details.length + 1;
       }

      this.details.unshift(text);

      this.loginService.myPersonStorage(text)
    });
  }


  killPerson(item: IPerson): void{

    const dialogRef = this.dialog.open(StatusPersonComponent, {
      width: '500px',
      data: item || {}
    })
  }

  resurrectPerson(item: IPerson): void{
    const dialogRef = this.dialog.open(StatusPersonComponent, {
      width: '500px',
      data: item || {}
    })
  }

  public deletePerson(item: IPerson): void{
    this.loading = this.loadingService.start();

    setTimeout(() =>{
      this.details = this.details.filter(id => id !== item);
      this.loginService.remove(item.char_id).subscribe();
      this.loading = this.loadingService.stop();
    }, 1500);

  }


}
