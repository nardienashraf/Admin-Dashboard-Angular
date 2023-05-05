import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  departments: any[] = [];
  customers: any[] = [];
  orders: any[] = [];
  products: any = {};
  sellers: any[] = [];
  ordersSlice: any[] = [];
  lang: any;
  currentAdmin: any;
  allAdmins: any;
  shipped: number = 0;
  cancelled: number = 0;
  deliverd: number = 0;
  pending: number = 0;
  confirmed: number = 0;
  constructor(
    private _router: Router,
    private service: ServiceService,
    private auth: AuthService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.getDepartments();
    this.getCustomers();
    this.getOrders();
    this.getProducts();
    this.getSellers();
    this.getAdmin();
    this.getAllAdmins();
  }

  getAdmin() {
    const id = localStorage.getItem('adminID');
    this.service.getAdminById(id).subscribe((res: any) => {
      this.currentAdmin = res;
    });
  }

  getAllAdmins() {
    const id = localStorage.getItem('adminID');
    this.service.getAllAdmins().subscribe((res: any) => {
      this.allAdmins = res;
      console.log(res);
    });
  }

  getDepartments() {
    this.service.getAllDepartments().subscribe((res: any) => {
      this.departments = res;
    });
  }

  getCustomers() {
    this.service.getAllCustomers().subscribe((res: any) => {
      this.customers = res;
    });
  }

  getOrders() {
    this.service.getAllOrders().subscribe((result: any) => {
      this.orders = result;

      let counter = 0;
      for (const obj of this.orders) {
        if (obj.status === 'Deliverd') counter++;
      }
      this.deliverd = counter;

      let counter1 = 0;
      for (const obj of this.orders) {
        if (obj.status === 'Shipped') counter1++;
      }
      this.shipped = counter1;

      let counter2 = 0;
      for (const obj of this.orders) {
        if (obj.status === 'Cancelled') counter2++;
      }
      this.cancelled = counter2;

      let counter3 = 0;
      for (const obj of this.orders) {
        if (obj.status === 'Pending') counter3++;
      }
      this.pending = counter3;

      let counter4 = 0;
      for (const obj of this.orders) {
        if (obj.status === 'Confirmed') counter4++;
      }
      this.confirmed = counter4;
    });
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  getSellers() {
    this.service.getAllSellers().subscribe((res: any) => {
      this.sellers = res;
    });
  }

  logOut() {
    localStorage.clear();
    this._router.navigate(['/sign-in']);
  }

  changeLang(lang: any) {
    localStorage.setItem('lang', lang.value);
    window.location.reload();
  }
}
