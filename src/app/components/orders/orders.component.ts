import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit{
  orders:any;
  
  constructor(private ordersService:OrderService) {
  }
  ngOnInit(): void {
    this.GetOrderBYUser();
  }
  
  GetOrderBYUser(){
    this.ordersService.GetOrdersByUser().subscribe((response:any)=>{
      console.log(response);
      this.orders=response.data;
    })
  }

  GetAllOrders(){
    this.ordersService.getAllOrders().subscribe((response:any)=>{
      console.log(response);
      this.orders=response.data;
    })
  }
}
