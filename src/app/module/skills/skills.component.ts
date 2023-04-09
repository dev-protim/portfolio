import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any;
  introduction: any;

  constructor(private fs: FirebaseService) { }

  ngOnInit(): void {
    this.skills = this.fs.getSkills();
    this.introduction = this.fs.getIntroduction();
  }

}
