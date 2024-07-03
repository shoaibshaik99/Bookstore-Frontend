import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { AddressService } from '../../services/address/address.service';
import { OrderService } from '../../services/order/order.service';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit { 
  cartItems: any;
  addressForm!: FormGroup;
  isAddressVisible: boolean = false;
  isOrderVisible: boolean = false;
  readonly floatLabelControl = new FormControl('Home' as FloatLabelType);
  cartOrder: any;
  addressId: any;
  count: number = 0;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.initializeAddressForm();
  }

  initializeAddressForm(): void {
    this.addressForm = this.formBuilder.group({
      fullName: [''],
      mobileNumber: [''],
      address: [''],
      city: [''],
      state: [''],
      type: this.floatLabelControl  
    });
  }

  loadCartItems(){
    this.cartService.GetCartByUserId().subscribe((response:any) => {

      this.cartItems = response.data;
    });
  }

  hasCartItems(): boolean {
    return this.cartItems !== undefined;
  }

  updateQuantity(cart: any, increment: boolean): void {
    const newQuantity = increment ? cart.quantity + 1 : cart.quantity - 1;
    if (newQuantity >= 1 && newQuantity <= 5) {
      this.cartService.updateQuantity({ cartId: cart.cartId, quantity: newQuantity }).subscribe(() => {
        this.loadCartItems();
      });
    }
  }

  decreaseQuantity(cart: any): void {
    this.updateQuantity(cart, false);
  }

  increaseQuantity(cart: any): void {
    this.updateQuantity(cart, true);
  }

  removeFromCart(cartId: any): void {
    this.cartService.removeCart(cartId).subscribe(() => {
      this.loadCartItems();
    });
  }

  addAddress(): void {
    // let data=
    //   {
    //     street: this.addressForm.value.address,
    //     city: this.addressForm.value.city,
    //     state: this.addressForm.value.state,
    //     zipCode:  "zipCode",
    //     country: "country",
    //     addressType: this.addressForm.value.type,
    //   }
    // this.addressService.AddAddress(data).subscribe((response: any) => {
    //   this.addressId = response.data.addressId;
    // });
    //this.isOrderVisible=true;
  }

  showAddress(cart: any){
    console.log(cart);
    this.cartOrder = cart;
    //console.log(this.cartOrder);
  }
  haveOrderCart(){
    return this.cartOrder !== undefined;
  }

  placeOrder(): void {
    const orderData = { cartId: this.cartOrder.cartId, addressId: this.addressId };
    this.orderService.PlaceOrder(orderData).subscribe(() => {
      this.router.navigate(['/dashboard/orderSuccess']);
    });
  }
}