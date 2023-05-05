import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css'],
})
export class SellersComponent implements OnInit {
  sellers: any[] = [];
  details: any = {};
  lodaing: boolean = false;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getSellers();
  }

  getSellers() {
    this.lodaing = true;
    this.service.getAllSellers().subscribe((result: any) => {
      this.sellers = result;
      this.lodaing = false;
    });
  }

  deleteSeller(id: object) {
    this.service.deleteSeller(id).subscribe((res) => {
      console.log(res);

      this.getSellers();
    });
  }

  view(index: number) {
    this.details = this.sellers[index];
  }
}
