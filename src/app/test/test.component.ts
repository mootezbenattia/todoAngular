import { Component, OnInit,TemplateRef } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  courses = [{
    title: "Angular",
    student: 3450,
    rating: 4.576,
    price: 190.95,
    releasedate: new Date(2019, 0, 15),
  },
  {
    title: "Ionic",
    student: 2000,
    rating: 7.576,
    price: 280,
    releasedate: new Date(2019, 0, 28),
  },
  {
    title: "Flutter",
    student: 3800,
    rating: 9.576,
    price: 300,
    releasedate:  Date(),
  }
  ]
  i:number;
  constructor(private toastr: ToastrService,private modalService: BsModalService) { }
  delete(){
    this.courses.splice(this.i,1);
    this.modalRef.hide();

  }
  showSuccess() {
    this.toastr.warning('veuillez effacer', 'vous étes sur!');
  }
  ngOnInit() {
  }
  openModal(template: TemplateRef<any>,i:number) {
    this.i=i;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
};
