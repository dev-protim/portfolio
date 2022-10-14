import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup | any;
  isSubmissionSuccessfull: boolean = false;
  introduction: any;

  constructor(private afs: Firestore,
    private fb: FormBuilder,
    private http: HttpClient,
    private fs: FirebaseService) { }
    
    ngOnInit(): void {
    // Get my email and phone
    this.introduction = this.fs.getIntroduction();

    // Contact form
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^((\\+?)|0)?[0-9]*$"), Validators.minLength(10), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      textarea: [''],
    });
  }

  get f() { return this.contactForm.controls; }

  // Only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  async onSubmit(form: FormGroup) {

    // Sent email
    const email = form.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(' https://formspree.io/f/mjvljyyd',
      { name: email.name, phone: email.phone, email: email.email, subject: email.subject, textarea: email.textarea },
      { 'headers': headers }).subscribe(
        (response: any) => {
          //
        }
    );

    try {
      const docRef = await addDoc(collection(this.afs, "users"), {
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        subject: form.value.subject,
        textarea: form.value.textarea
      });
      this.resetForm();
      this.isSubmissionSuccessfull = true;
      setTimeout(() => {
        this.isSubmissionSuccessfull = false;
      }, 3000);
    } catch (e) {
      //
    }
  }

  resetForm() {
    this.contactForm.reset();
  }
}
