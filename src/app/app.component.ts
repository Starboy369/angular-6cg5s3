import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  uname = 'Akshay Kumar R.G';

  checkbox =[
    {
    "id":1,
    "name" :"item1",
    "selected":false
  },
  {
    "id":2,
    "name" :"item2",
    "selected":false
  },
  {
    "id":3,
    "name" :"item3",
    "selected":false
  },
  {
    "id":4,
    "name" :"item4",
    "selected":false
  },
  ]

  onSelect(id:number, selected:boolean){

    for(let i=0;i<this.checkbox.length; i++){
      if(this.checkbox[i].id != id){
        this.checkbox[i].selected = false;
      }
    }
  }

}
