import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: `jumbotron.component.html`,
})
export class JumbotronComponent  { 
    private jbtHeading:string;
    private jbtTxt: string;
    private jbtBtn: string;
    private jbtBtnUrl: string;

    constructor (){
      this.jbtHeading = "Hello World";
      this.jbtTxt = "This is simple Angular 2 unit with jumbotron style component for calling extra attention to some content";
      this.jbtBtn = "ReadMore";
      this.jbtBtnUrl = "/about";
    }
}
