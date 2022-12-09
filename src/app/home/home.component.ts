import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
   nodes: any = [
      {
        name: 'Sundar Pichai',
        cssClass: 'ngx-org-ceo',
        image: '',
        title: 'Chief Executive Officer',
        childs: [
          {
            name: 'Thomas Kurian',
            cssClass: 'ngx-org-ceo',
            image: 'assets/node.svg',
            title: 'CEO, Google Cloud',
          },
          {
            name: 'Susan Wojcicki',
            cssClass: 'ngx-org-ceo',
            image: 'assets/node.svg',
            title: 'CEO, YouTube',
            childs: []
          },
          {
            name: 'Jeff Dean',
            cssClass: 'ngx-org-head',
            image: 'assets/node.svg',
            title: 'Head of Artificial Intelligence',
            childs: [
              {
                name: 'David Feinberg',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                title: 'CEO, Google Health',
                childs: []
              }
            ]
          }
        ]
      },       
  ];


 
}
