import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  unAproveProducts: any = [];
  constructor(private service: ServiceService) {}

  ngOnInit(): void {}

  getAllProductsApprove() {
    this.service.getAllProductsApprove().subscribe((res) => {
      this.unAproveProducts = res;
      console.log(this.unAproveProducts);
    });
  }
}
