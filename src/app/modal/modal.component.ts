import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content): Observable<string> {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    return of(this.closeResult);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
