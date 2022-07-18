import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  CreateContact(Record: any) {
    return this.firestore.collection('contact').add(Record);
  }
  getUserList() {
    return this.firestore.collection('contact').snapshotChanges();
  }
  update(record: any) {
    this.firestore.doc('contact/' + record.id).update(record);
  }
  delete(record_id: any) {
    this.firestore.doc('contact/' + record_id).delete();
  }
}
