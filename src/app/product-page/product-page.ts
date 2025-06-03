import { Component, inject, OnInit } from '@angular/core';
import { Product } from "../product/product";
import { ProductSchmea } from '../../schema/product';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-page',
  imports: [Product],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})
export class ProductPage implements OnInit {
  private route = inject(ActivatedRoute)
  product?: ProductSchmea
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = +params['id']
    })
    this.product = {
      id: this.id,
      name: "Apple",
      image: "https://th.bing.com/th/id/OIP.oUTReRStZQE0RfP8-7XoswHaEm?w=260&h=180&c=7&r=0&o=5&pid=1.7",
      price: 33.3,
      qty: 0,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Expedita molestias distinctio libero obcaecati incidunt voluptate mollitia veritatis eveniet voluptates ducimus aspernatur, voluptatum dolorem praesentium esse.Repellat qui possimus adipisci excepturi accusamus placeat ipsum asperiores eaque nisi minus, ea, sapiente odio quo quam veniam et facilis obcaecati! Necessitatibus ipsum deleniti veritatis ad quam quo doloribus labore ratione, minus possimus, alias asperiores tenetur totam adipisci! Repudiandae aliquam quis nostrum vitae corrupti minima molestiae rem reiciendis, maxime reprehenderit quisquam odio ad.Quam veritatis sint eos cumque alias necessitatibus itaque iusto nobis voluptatem voluptatum fugit, debitis, temporibus consectetur fuga! Harum velit, repellat quis eligendi expedita eveniet.Inventore harum quibusdam accusamus tenetur incidunt, repudiandae maxime, repellat eius libero fuga deserunt unde? Debitis rem tempore, nemo non aspernatur qui nihil blanditiis molestias quam necessitatibus quasi placeat unde iusto id adipisci consequuntur nesciunt autem neque nisi.Cum, ducimus voluptatum quaerat dicta molestiae atque delectus magnam similique? Cupiditate vero aspernatur ab illo at dolor voluptas commodi optio impedit sunt explicabo necessitatibus atque, ipsum laudantium architecto facilis perspiciatis eveniet officia aperiam quae modi sint hic.Ad necessitatibus ipsam fugiat accusamus corporis reiciendis laborum blanditiis, dicta quo possimus nesciunt corrupti quasi beatae repellat, odit eius dignissimos ipsa nisi.Animi eum distinctio, laborum quam, alias quas eos deserunt qui excepturi placeat iste, non voluptatum quia suscipit perspiciatis nostrum ipsam architecto magnam ex necessitatibus? Nostrum velit voluptatibus maxime facere.Qui magni, animi dolor asperiores quaerat sunt laboriosam velit odio quidem ipsam consectetur culpa et voluptas nulla aliquam labore dignissimos delectus quia repellendus inventore distinctio exercitationem doloribus.Voluptatibus quaerat excepturi mollitia exercitationem quos praesentium magni, ullam error.Incidunt sit illum facilis odit provident aliquam laboriosam, accusamus exercitationem? Dignissimos non, voluptas temporibus fugiat aperiam cumque repellendus laudantium illum atque velit recusandae totam tenetur doloribus quisquam laboriosam voluptatem qui libero soluta aliquam veniam voluptates.Autem."
    };
  }
  id: number = 0

}
