import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { query, orderBy, limit } from "firebase/firestore";
import { Observable } from 'rxjs';
import { Intro } from 'src/app/module/intro/intro.typing';
import { Service } from 'src/app/module/services/service.typing';
import { Skill } from 'src/app/module/skills/skills.typing';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  introduction$: Observable<Intro[]> | any;
  services$: Observable<Service[]> | any;
  skills$: Observable<Skill[]> | any;

  constructor(private fs: Firestore) {
  }

  // Get Introduction
  getIntroduction(): Observable<Intro[]> {
    const collect = collection(this.fs, 'introduction');
    this.introduction$ = collectionData(collect);
    return this.introduction$;
  }

  // Get Services
  getServices(): Observable<Service[]> {
    const collect = collection(this.fs, 'services')
    this.services$ = collectionData(collect);
    return this.services$;
  }

  // Get Skills
  getSkills(): Observable<Skill[]> {
    const collect = collection(this.fs, 'skills')
    this.skills$ = collectionData(collect);
    return this.skills$;
  }
}
