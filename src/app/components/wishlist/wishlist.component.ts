import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  wishlist:any;

  constructor(private wishlistService:WishlistService) {
  }
  ngOnInit(): void {
    this.GetAllWishListByUser();
  }
  
  GetAllWishListByUser(){
    this.wishlistService.GetWishListItemsByUser().subscribe((response:any)=>{
      console.log(response);
      this.wishlist=response.data;
    })
  }
}
