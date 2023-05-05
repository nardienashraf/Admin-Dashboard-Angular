import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  unAproveProducts: any = [];
  prodThree: any = {
    name: { ar: '', en: '' }, //done
    priceBefore: 0,
    priceAfter: 0, //done
    brand: { ar: '', en: '' }, //done
    quantity: 0, //done
    photos: [''],
    mainPhoto: '',
    productDetails: {
      ar: '',
      en: '',
    }, //done
    isActive: true,
    departmentID: '', //done
    subDepartmentID: '', //done
    nestedSubDepartment: '', //done
  };

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getAllProductsApprove();
  }

  getAllProductsApprove() {
    this.service.getAllProductsApprove().subscribe((res) => {
      this.unAproveProducts = res;
      console.log(this.unAproveProducts);
    });
  }

  viewDetails(id: any, product: any) {
    this.prodThree = product;
    console.log(this.prodThree);
  }

  approveProduct(productId: any) {
    this.service
      .setProductApprove(productId, { response: 'Approve' })
      .subscribe((res) => {
        this.getAllProductsApprove();
      });
  }

  removeProduct(productId: any) {
    this.service
      .setProductApprove(productId, { response: 'Delete' })
      .subscribe((res) => {
        this.getAllProductsApprove();
      });
  }
}
