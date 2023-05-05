import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  custmoers: any[] = [];
  details: any = {};
  lodaing: boolean = false;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.lodaing = true;
    this.service.getAllCustomers().subscribe((result: any) => {
      this.custmoers = result;
      this.lodaing = false;
    });
  }

  view(index: number) {
    this.details = this.custmoers[index];
  }
}
