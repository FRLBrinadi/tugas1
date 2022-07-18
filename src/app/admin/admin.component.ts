import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../register/ContactModel';
import { CrudService } from '../register/crud.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  contactList: ContactModel[] = [];
  contact: ContactModel = new ContactModel();

  constructor(
    private crudservice: CrudService,
    private database: AngularFireDatabase
  ) {}
  ngOnInit(): void {
    this.getContactList();
  }
  // ---------------> FIRESTORE DATABASE <---------------

  // ========== CREATE ==========
  getContactList() {
    this.crudservice.getUserList().subscribe((data: any) => {
      this.contactList = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          email: e.payload.doc.get('email'),
          name: e.payload.doc.get('name'),
          password: e.payload.doc.get('password'),
        };
      });
      console.log(this.contactList);
    });
  }
  // ========== EDIT RECORD ==========
  Editrecord(Record: any) {
    Record.editemail = Record.email;
    Record.editname = Record.name;
    Record.editpassword = Record.password;
  }

  // ========== UPDATE DATA ==========
  Updatedata() {
    this.crudservice.update(this.contact);
    alert('acoount has updated');
    debugger;
  }
  // ========== REMOVE DATA ==========
  Deletedata(record_id: any) {
    this.crudservice.delete(record_id);
    alert('account has deleted');
    debugger;
  }
  // ---------------> REALTIME DATABASE <---------------

  // ========== GET LIST ==========
  GetContactList() {
    this.database
      .list(`contact`)
      .valueChanges()
      .subscribe((res: ContactModel[`list`]) => {
        this.contactList = res;
      });
  }

  // ========== UPDATE DATA ==========
  update() {
    this.database.database
      .ref(`contact/${this.contact.id}`)
      .update(this.contact);
    alert(`Updated Success`);
  }

  // ========== REMOVE DATA ==========
  remove() {
    this.database.database.ref(`contact/${this.contact.id}`).remove();

    alert(` ${this.contact.name} has been Deleted`);
  }

  // ========== SET MODEL ==========
  setModel(item: ContactModel) {
    this.contact = item;
  }
}
