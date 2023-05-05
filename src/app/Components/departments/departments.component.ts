import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';
import { Department } from 'src/app/Models/department';
import { SubDepartment } from 'src/app/Models/sub-department';
import { SubSubDepartment } from 'src/app/Models/sub-sub-department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  subDepartments: SubDepartment[] = [];
  subSubDepartments: SubSubDepartment[] = [];
  lodaing: boolean = false;

  form!: FormGroup;
  formSub!: FormGroup;
  formSubSub!: FormGroup;
  updateSub: object = {};

  subSubDepartmentValue: any;

  constructor(
    private service: ServiceService,
    private router: Router,
    private build: FormBuilder
  ) {
    this.form = new FormGroup({
      name: new FormGroup({
        en: new FormControl(''),
        ar: new FormControl(''),
      }),
    });

    this.formSub = new FormGroup({
      name: new FormGroup({
        en: new FormControl(''),
        ar: new FormControl(''),
      }),
      parentID: new FormControl('', [Validators.required]),
    });

    this.formSubSub = new FormGroup({
      name: new FormGroup({
        en: new FormControl(''),
        ar: new FormControl(''),
      }),
      parentID: new FormControl('', [Validators.required]),
    });

    this.subSubDepartmentValue;
  }

  ngOnInit(): void {
    this.getDepartments();
    this.getSubDepartments();
    this.getSubSubDepartments();
  }

  // Departments Methods

  getDepartments() {
    this.lodaing = true;
    this.service.getAllDepartments().subscribe((result: any) => {
      this.departments = result;
      console.log(result);
      console.log(this.departments);

      this.lodaing = false;
    });
  }

  addNewDepartment() {
    console.log(this.form.value);

    this.service.addNewDepartment(this.form.value).subscribe((res) => {
      this.getDepartments();
      window.location.reload();
    });
  }

  removeDepartment(id: object) {
    this.service.deleteDepartment(id).subscribe((res) => {
      this.getDepartments();
      alert('Department Deleted Successfully');
    });
  }

  updateDepartment(id: object) {
    const modal = this.form.value;
    this.service.updateDepartment(id, modal).subscribe((res) => {
      window.location.reload();
    });
  }

  // Sub-Departments Methods

  getSubDepartments() {
    this.service.getAllSubDepartment().subscribe((result: any) => {
      this.subDepartments = result;
    });
  }

  addNewSubDepartment() {
    // const modal = this.formSub.value;
    this.service
      .addNewSubDepartment(this.formSubSub.value)
      .subscribe((res) => {});
    this.getSubDepartments();
    window.location.reload();
  }

  removeSubDepartment(id: object) {
    console.log(id);
    this.service.deleteSubDepartment(id).subscribe((res) => {
      this.getSubDepartments();
      alert('subDepartment Deleted Successfully');
    });
  }

  update(x: object, index: number) {
    this.updateSub = x;
    this.subSubDepartmentValue = this.subSubDepartments[index];
    console.log(this.subSubDepartmentValue);
  }

  updateSubDepartment(item: string) {
    this.service.updatesubDepartment(this.updateSub, item).subscribe((res) => {
      window.location.reload();
    });
  }

  // Sub-Sub Departments Methods

  getSubSubDepartments() {
    this.service.getAllSubSubDepartment().subscribe((result: any) => {
      this.subSubDepartments = result;
    });
  }

  addNewSubSubDepartment() {
    const modal = this.formSubSub.value;
    this.service.addNewSubSubDepartment(modal).subscribe((res) => {});
    this.getSubSubDepartments();
    window.location.reload();
  }

  removeSubSubDepartment(id: object) {
    console.log(id);
    this.service.deleteSubSubDepartment(id).subscribe((res) => {
      this.getSubSubDepartments();
      alert('Sub SubDepartment Deleted Successfully');
    });
  }

  updateSubSubDepartment(item: string) {
    this.service
      .updateSubSubDepartment(this.updateSub, item)
      .subscribe((res) => {
        window.location.reload();
      });
  }
}
