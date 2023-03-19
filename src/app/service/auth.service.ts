import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
  }

  customerUrl='http://localhost:3000/customers';
  productUrl='http://localhost:3000/products';

  registerUser(inputdata:any){
    return this.http.post(this.customerUrl,inputdata)
  }

  getUserbyId(id:any){
    return this.http.get(this.customerUrl+'/'+id);
  }

  getAllCustomer(){
    return this.http.get(this.customerUrl);
  }

  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }

  getAllOrders() {
    return this.http.get(this.productUrl);
  }
}
