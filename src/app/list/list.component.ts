import {Component} from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls:['./list.component.css']
})
export class ListComponent {
  private list:any = [
    {
      name:"Mr Fancy Pants",
      value:10,
      status: 1
    },
      {
      name:"Ms Fancy Pants",
      value:50,
      status: 0
    },
      {
      name:"Mr Fancy Pants Jr",
      value:20,
      status: 0
    },
      {
      name:"Thunderpants",
      value:100,
      status: 1
    },
  ]


}