import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form!: FormGroup;

  public returnUrl: string = "home"

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',
        [Validators.required,
                      Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit(): boolean {
    if (this.form.invalid) {
      return false;
    }
    this.router.navigate(this.redirectTo())
    console.log(this.form);
    return true;
  }

  redirectTo(): any[] {
    this.route.snapshot.paramMap.get('home');
    return [this.returnUrl];
  }

  get email() {return this.form.get('email');}

  get password() {return this.form.get('password');}

}
