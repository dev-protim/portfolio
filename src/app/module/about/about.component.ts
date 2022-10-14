import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  experience: any;
  education: any;
  reverseEducation: any;

  constructor(private fs: FirebaseService) { }

  ngOnInit(): void {
    this.experience = this.fs.getExperiences();
    this.fs.getEducations().subscribe(data => {
      this.education = data;
      this.reverseEducation = this.education.reverse();
    });
  }

}
