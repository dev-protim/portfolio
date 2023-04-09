import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


@Component({
  selector: 'app-pdf-template',
  templateUrl: './pdf-template.component.html',
  styleUrls: ['./pdf-template.component.scss']
})
export class PdfTemplateComponent implements OnInit {

  @ViewChild('pdfTemplate') pdfTemplate!: ElementRef;

  introductionSubscription: Subscription | any;
  introduction: any;
  imagePath: any;

  constructor(private fs: FirebaseService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.introductionSubscription = this.fs.getIntroduction().subscribe(
      (response: any) => {
        this.introduction = response;
        this.getBase64ImageFromUrl(this.introduction.thumb)
          .then(result => this.introduction.convertedThumb = result)
          .catch(err => console.error(err));
        // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
        //        + toReturnImage.base64string);
        console.log(this.introduction);
      }
    );
  }
  async getBase64ImageFromUrl(imageUrl: any) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  print(): void {
    // this.pdfTemplate.nativeElement.print();
    let divToPrint: any = document.querySelector('.pdf-box');
    console.log(divToPrint.innerHTML);
    let popupWin: any = window.open('', '_blank', 'width=300,height=300');
    popupWin.document.open();
    popupWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</html>');
    popupWin.document.close();
  }

}
