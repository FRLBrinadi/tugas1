import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModel } from '../register/ContactModel';
import { CrudService } from '../register/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  pinaccount: any;
  pinpassword: any;
  constructor(private crudservice: CrudService, private router: Router) {}

  pinAdmin() {
    if ((this.pinaccount === 'admin', this.pinpassword === '292021173')) {
      this.router.navigateByUrl('admin');
    } else {
      alert('Forgot password?');
    }
  }

  ngOnInit(): void {}
}
