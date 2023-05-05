import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  //  Get all

  getAllProducts() {
    return this.http.get(`${environment.APIURL}/product/all`);
  }

  getProdctById(id: any) {
    return this.http.get(`${environment.APIURL}/product/${id}`);
  }

  getAllCustomers() {
    return this.http.get(`${environment.APIURL}/customer`);
  }

  getAllDepartments() {
    return this.http.get(`${environment.APIURL}/department`);
  }

  getAllSubDepartment() {
    return this.http.get(`${environment.APIURL}/subDepartments`);
  }

  getAllSubSubDepartment() {
    return this.http.get(`${environment.APIURL}/subSubDepartments`);
  }

  getAllOrders() {
    return this.http.get(`${environment.APIURL}/order`);
  }

  getAllSellers() {
    return this.http.get(`${environment.APIURL}/seller`);
  }

  getAllAdmins() {
    return this.http.get(`${environment.APIURL}/admin/`);
  }

  getAdminById(id: any) {
    return this.http.get(`${environment.APIURL}/admin/${id}`);
  }

  // Add

  addNewProduct(product: any) {
    return this.http.post(`${environment.APIURL}/product`, product);
  }

  addNewDepartment(department: any) {
    return this.http.post(`${environment.APIURL}/department`, department);
  }

  addNewSubDepartment(subDepartment: any) {
    return this.http.post(
      `${environment.APIURL}/subDepartments`,
      subDepartment
    );
  }

  addNewSubSubDepartment(subSubDepartment: any) {
    return this.http.post(
      `${environment.APIURL}/subSubDepartments`,
      subSubDepartment
    );
  }

  // Delete

  deleteProduct(id: any) {
    return this.http.delete(`${environment.APIURL}/product/${id}`);
  }

  deleteSeller(id: object) {
    return this.http.delete(`${environment.APIURL}/seller/${id}`);
  }

  deleteDepartment(id: object) {
    return this.http.delete(`${environment.APIURL}/department/${id}`);
  }

  deleteSubDepartment(id: object) {
    return this.http.delete(`${environment.APIURL}/subDepartments/${id}`);
  }

  deleteSubSubDepartment(id: object) {
    return this.http.delete(`${environment.APIURL}/subSubDepartments/${id}`);
    // return this.http.delete(`http://localhost:5000/subSubDepartments/${id}`);
  }

  // Update

  updateProduct(id: object, obj: object) {
    return this.http.patch(`${environment.APIURL}/product/${id}`, obj);
  }

  updateDepartment(id: object, obj: string) {
    return this.http.patch(`${environment.APIURL}/department/${id}`, obj);
  }
  updatesubDepartment(id: object, obj: string) {
    return this.http.patch(`${environment.APIURL}/subDepartments/${id}`, obj);
  }
  updateSubSubDepartment(id: object, obj: string) {
    return this.http.patch(
      `${environment.APIURL}/subSubDepartments/${id}`,
      obj
    );
  }

  updateOrderStatus(id: object, status: any) {
    return this.http.patch(`${environment.APIURL}/order/${id}`, { status });
  }

  // productApproval

  getAllProductsApprove() {
    return this.http.get(`${environment.APIURL}/productApproval`);
  }

  setProductApprove(id: any, response: object) {
    return this.http.post(
      `${environment.APIURL}/productApproval/${id}`,
      response
    );
  }
}
