import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any;

  constructor(private fs: FirebaseService) { }

  ngOnInit(): void {
    this.services = this.fs.getServices();
  }

}
