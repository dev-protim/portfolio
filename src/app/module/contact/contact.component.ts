import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  collection,
  doc,
  docData,
  DocumentReference,
  CollectionReference,
  Firestore,
  onSnapshot,
  query,
  where,
  Unsubscribe,
  Query,
  DocumentData,
  collectionData,
  collectionChanges,
  docSnapshots,
  addDoc
} from '@angular/fire/firestore';
import { orderBy } from '@firebase/firestore';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup | any;

  constructor(private afs: Firestore) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      textarea: new FormControl(''),
    });
  }

  async onSubmit(form: FormGroup) {
    try {
      const docRef = await addDoc(collection(this.afs, "users"), {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        textarea: form.value.textarea
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

}
