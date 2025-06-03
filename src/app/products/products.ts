import { Component } from '@angular/core';
import { Product } from "../product/product";
import { ProductSchmea } from '../../schema/product';

@Component({
  selector: 'app-products',
  imports: [Product],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  products: ProductSchmea[] = [
    {
      id: 1,
      name: "Apple",
      image: "https://th.bing.com/th/id/OIP.oUTReRStZQE0RfP8-7XoswHaEm?w=260&h=180&c=7&r=0&o=5&pid=1.7",
      price: 33.3,
      qty: 0,
      description: "This is an apple"
    },
    {
      id: 2,
      name: "Apple",
      image: "https://th.bing.com/th/id/OIP.oUTReRStZQE0RfP8-7XoswHaEm?w=260&h=180&c=7&r=0&o=5&pid=1.7",
      price: 33.3,
      qty: 3,
      description: "This is an apple"
    },
    {
      id: 3,
      name: "Apple",
      price: 33.3,
      image: "https://th.bing.com/th/id/OIP.oUTReRStZQE0RfP8-7XoswHaEm?w=260&h=180&c=7&r=0&o=5&pid=1.7",
      qty: 3,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, consequatur perferendis tempora fuga dolores tempore! Odit adipisci alias voluptates. Odit doloribus omnis, dicta neque quo recusandae? Tempore veniam nemo, cupiditate cumque rerum quis est, ipsam ea facere ut ab eius dignissimos perferendis esse fuga cum? Illo, necessitatibus veritatis ad aliquid, sunt facere quidem libero sint laborum amet cumque sapiente, suscipit impedit eaque hic soluta quas corrupti nam omnis tenetur pariatur? Saepe nobis ducimus a nihil eveniet culpa alias vitae nam, beatae laborum doloribus pariatur harum quidem aperiam consequatur dolores voluptas nisi tempora doloremque esse provident totam. Vitae inventore animi iusto placeat magni tempore accusamus porro, obcaecati ea, ipsam quo harum cupiditate deserunt magnam possimus at ullam! Vero, animi? Accusamus nisi odit, cumque corporis, totam excepturi necessitatibus dicta assumenda suscipit amet, ab nihil ipsum corrupti ducimus ad distinctio alias doloribus incidunt officia nesciunt quasi impedit fugiat earum ullam. Assumenda sed voluptate corporis ipsam reprehenderit aliquid provident, commodi nulla quibusdam fuga est placeat modi illo earum sint, cumque numquam labore odio dignissimos nostrum voluptatem incidunt vel! Recusandae dolores facere nulla blanditiis esse quasi excepturi iure eveniet ipsa, voluptatem alias optio repellendus assumenda corporis aliquam tempore! Explicabo magni aliquid possimus, magnam excepturi similique voluptas a quaerat dolore deserunt architecto id impedit quam aut expedita veniam voluptatibus facere tenetur cumque nihil fugit autem deleniti sapiente. Quas non doloremque laborum nesciunt quia praesentium, soluta a ad assumenda fuga consequatur eveniet vel expedita illum quis aut asperiores sunt nobis quidem amet ex maiores enim? Modi beatae laborum deleniti repudiandae accusantium iusto nemo aliquid expedita! Unde enim veritatis dolor quia, recusandae exercitationem laboriosam amet, optio nobis esse nostrum hic natus alias minus. Suscipit nulla repellat incidunt reprehenderit? Eveniet nulla similique facere labore harum ex autem dignissimos nostrum ut ipsam explicabo, officiis ipsum est consequatur necessitatibus veniam excepturi?"
    }
  ];
}
