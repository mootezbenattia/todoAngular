import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier'
import { doesNotThrow } from 'assert';

@Component({
  selector: 'app-listetodo',
  templateUrl: './listetodo.component.html',
  styleUrls: ['./listetodo.component.css']
})
export class ListetodoComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  todo = "ToDo List";
  done = "Done"

  todos = [{
    descr: "Going out with my friends",
    dta: new Date(2019, 3, 28),
    dtf: new Date(2019, 10, 25),
  },
  {
    descr: "Doing my homeworks",
    dta: new Date(2019, 3, 27),
    dtf: new Date(2019, 7, 24),
  },
  {
    descr: "Playing belotte",
    dta: new Date(2019, 3, 30),
    dtf: new Date(2019, 5, 2),
  }
  ]
  dones = [{
    descr: "learning Angular",
    dta: new Date(2019, 4, 9),
    dtf: new Date(2019, 4, 19),

  }]
i:number;
  constructor(private toastr: ToastrService, private modalService: BsModalService) { }
  delete() {
    this.todos.splice(this.i, 1);

    this.modalRef.hide();
    this.showSuccess();

  }
  showSuccess() {
    this.toastr.warning('vous avez effacé avec succés', 'Bravo Mootez!');
  }
  showSuccess1() {
    this.toastr.warning('vous avez fini votre todo avec succés', 'Bravo Mootez!');
  }

  deletes() {
    this.dones.splice(this.i, 1);
    this.modalRef.hide();
    this.showSuccess1();

  }
  adddata(i, todos) {

    this.dones.push(todos[i]);
    this.todos.splice(i, 1);
  }


  ngOnInit() {
  }
  openModal(template: TemplateRef<any>,i:number) {
    this.i=i;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  openModals(templates: TemplateRef<any>,i:number) {
    this.i=i;
    this.modalRef = this.modalService.show(templates, { class: 'modal-sm' });
  }
  confirms(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  declines(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
}
