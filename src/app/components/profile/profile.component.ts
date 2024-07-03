import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddressService } from '../../services/address/address.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  isDisable: boolean = true;
  disableAddress: boolean = true;
  listOfAddress=[
    {
      addressId: 0,
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      addressType: ''
    }
  ]
  userDetail = {
    fullName: '',
    email: '',
    password: '',
    mobileNumber: ''
  };

  constructor(
    private addressService: AddressService,
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadUserDetails();
    this.loadAllAddresses();
  }

  loadAllAddresses(): void {
    this.addressService.GetAddressesOfUser().subscribe((response: any) => {
      console.log(response);
      this.listOfAddress = response.data;
    });
  }

  loadUserDetails(): void {
    this.userService.FetchUserDetails().subscribe((result: any) => {
      console.log(result);
      this.userDetail = result.data;
    });
  }

  updateUser(): void {
    const updatedData = {
      fullName: this.userDetail.fullName,
      email: this.userDetail.email,
      password: this.userDetail.password,
      contactNumber: this.userDetail.mobileNumber
    };

    this.userService.UpdateUserDetails(updatedData).subscribe((response: any) => {
      console.log(response);
      this.loadUserDetails();
    });
  }

  updateAddress(address: any): void {
    const updatedAddress = {
      addressId: address.addressId,
      street: address.address,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      country: address.country,
      addressType: address.addressType

    };

    this.addressService.UpdateAddress(updatedAddress).subscribe((response: any) => {
      console.log(response);
      this.loadAllAddresses();
    });
  }

  haveAddresses(): boolean {
    return this.listOfAddress!==undefined;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
