import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  shipped: number = 0;
  cancelled: number = 0;
  deliverd: number = 0;
  pending: number = 0;
  lodaing: boolean = false;
  id: object = {};
  newStatusValue: string = '';
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.lodaing = true;
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
      this.lodaing = false;
    });
  }

  orderID(id: any) {
    this.id = id;
  }

  newStatus(status: string) {
    this.newStatusValue = status;
    this.service
      .updateOrderStatus(this.id, this.newStatusValue)
      .subscribe((res) => {
        this.getOrders();
        window.location.reload();
      });
  }
}
