import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  dataSource : any;
  userlist: any;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service:AuthService
    ){
    this.LoadUser();
}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  userList:any;

  LoadUser(){
    this.service.getAllOrders().subscribe(res=>{
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  displayedColumns: string[] = ['id', 'name', 'quantity', 'stars'];

}
