import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-add',
  templateUrl: './search-add.component.html',
  styleUrls: ['./search-add.component.css']
})
export class SearchAddComponent implements OnInit {
  search;
  item=['apple','mango','bananna','chickoo'];
  temp=this.item;
  status=false;
  message;
  display="Show"
  constructor() { }

  ngOnInit() {
        let x =JSON.parse(localStorage.getItem('fruits'));
        if(x){
          this.item=x;
        }
        // console.log(this.item);
  }

  addFruit(){
        this.item.push(this.search);
        localStorage.setItem('fruits',JSON.stringify(this.item));
        this.item=JSON.parse(localStorage.getItem('fruits'));
        this.search="";
        this.status=false;
        this.message="";
  }
  checkFruit(){
    let x=this.item.includes(this.search);
    let a=JSON.stringify(this.item).indexOf(this.search);
    // if(!x){
    //   this.message="Not Found, please click on add";
    //   this.status=true;
    // }
    // else{
    //   this.status=false;
    //   this.message="";
    // }
    if((JSON.stringify(this.item).indexOf(this.search.toUpperCase()))>=0 || (JSON.stringify(this.item).indexOf(this.search.toLowerCase()))>=0){
      this.status=false;
      this.message="";
      
    }
    else{
      this.message="Not Found, please click on add";
      this.status=true;
    }
    // console.log(this.item.includes(this.search));
  }

  remove(x){
    let ind=this.item.indexOf(x);
    if(ind !=-1){
      this.item.splice(ind,1);
      localStorage.setItem('fruits',JSON.stringify(this.item));
    }
  }

}
