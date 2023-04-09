import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PdfTemplateComponent } from 'src/app/pdf/pdf-template/pdf-template.component';

@Component({
  providers:[PdfTemplateComponent ],
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  // @ViewChild('pdfTemplate') pdfTemplate!: ElementRef;
  // @ViewChild('PdfTemplateComponent') pdfTemplateComponent!: ElementRef;

  introduction: any;

  constructor(private fs: FirebaseService,
    private pdfTemplateComponent: PdfTemplateComponent) { }

  ngOnInit(): void {
    this.introduction = this.fs.getIntroduction();
  }

  public generatePDF(): void {
    this.pdfTemplateComponent.print();

    // html2canvas(this.pdfTemplate.nativeElement, { scale: 3 }).then((canvas) => {
    //   const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
    //   const fileWidth = 209;
    //   const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
    //   let PDF = new jsPDF('p', 'mm', 'a4',);
    //   PDF.setProperties({
    //     title: "new Report"
    //   });
    //   // PDF.fromHTML(DATA.innerHTML, 30, 30);
    //   PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 20, fileWidth, generatedImageHeight);
    //   PDF.html(this.pdfTemplate.nativeElement.innerHTML)
    //   window.open(URL.createObjectURL(PDF.output("blob")))
    //   // PDF.save('angular-invoice-pdf-demo.pdf');
    // });
  }

}
