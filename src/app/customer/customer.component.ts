import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-userlisting',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  dataSource : any;
  userlist: any;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private service:AuthService
    ){
    this.loadCustomer();
}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  userList:any;

  loadCustomer(){
    this.service.getAllCustomer().subscribe(res=>{
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort = this.sort;
    })

  }
  displayedColumns: string[] = ['username', 'name', 'email', 'status'];

  opendialog(code:any){
  }
}
