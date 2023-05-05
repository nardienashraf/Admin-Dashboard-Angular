import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SigninComponent } from './Components/signin/signin.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductsComponent } from './Components/products/products.component';
import { SellersComponent } from './Components/sellers/sellers.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'notification', component: SettingsComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'sellers', component: SellersComponent },
    ],
    canActivate: [AuthGuard],
  },

  { path: 'sign-in', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
