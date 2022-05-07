import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introduction: any;

  constructor(private fs: FirebaseService) { }

  ngOnInit(): void {
    this.introduction = this.fs.getIntroduction();
  }

}
