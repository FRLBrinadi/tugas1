import { Component, OnInit } from '@angular/core';
import { ContactModel } from './ContactModel';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  isModal: any;
  pinAccess: any;
  constructor(
    private crudservice: CrudService,
    private database: AngularFireDatabase,
    private router: Router
  ) {}

  // ---------------> FIRESTORE DATABASE <---------------

  // ========== CREATE DATA ==========
  CreateRecord() {
    let Record = {
      email: this.contact.email,
      name: this.contact.name,
      password: this.contact.password,
    };
    this.crudservice
      .CreateContact(Record)
      .then((res) => {
        this.contact.email = '';
        this.contact.name = '';
        this.contact.password = '';
        console.log(res);
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });

    alert(`Hello ${this.contact.name}`);
  }

  // ---------------> REALTIME DATABASE <---------------

  // ========== CREATE DATA ==========
  send() {
    this.contact.id = Math.random().toPrecision(36).substr(2, 6);
    this.database.database.ref(`contact/${this.contact.id}`).set(this.contact);
    alert(`${this.contact.name} has been Created `);
  }

  // ========== ADMIN BUTTON ==========
  GoToAdmin() {
    if (this.pinAccess === '292021173') {
      this.router.navigateByUrl('/admin');
    } else {
      alert('PIN wrong');
    }
  }

  // ========== SHOW MODAL ==========
  onModal() {
    this.isModal = true;
  }
  offModal() {
    this.isModal = false;
  }
  ngOnInit(): void {}
}
