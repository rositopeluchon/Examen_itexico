import { Component, OnInit } from '@angular/core';
import {IDog} from './IDog';
import {ProductService} from './table.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  newDog: IDog[]=[{_id:'', name:'', price:'', description:'', provider: [], img:'', size:'', create_at:'', update_at: ''}];
  currentDog: any;

  /*dogs : IDog []=[
    {name:'Tyrion', race: 'Basset Hound', description: 'A short dog with a large body and big ears', img:'http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23010_basset-hound.jpg'},
    {name:'Ballito', race: 'Mixed', description: 'A little white dog', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dEN6nx7WKTGElAT35j8HYHdzNlq9GN-WRAGIj56sGx-NS6Dq'},
    {name:'Hannah', race: 'Mixed', description: 'A little black dog', img:'data:image/jpeg;base64,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'},
    {name:'La wera', race: 'Cocker Spanish', description: 'A beautiful short golden dog', img:'data:image/jpeg;base64,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'},
    {name:'Kaizer', race: 'German Shepherd', description: 'A beautiful dog', img:'https://vetstreet.brightspotcdn.com/dims4/default/7dfaa28/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F59%2Fbb7610a80711e0a0d50050568d634f%2Ffile%2Fgerman-shepherd-5-645mk070411.jpg'},
    {name:'Carbonero', race: 'Labrador', description: 'A beautiful and big dog, loyal', img:'https://www.google.com.mx/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj6o-nTtYzXAhXFHpQKHY-4CWcQjRwIBw&url=http%3A%2F%2Fdogtime.com%2Fdog-breeds%2Fbasset-hound&psig=AOvVaw1aMUEYrQEBdn82cMnFgkWf&ust=1509043061781471'},
  ];
  */

  dogs: any [];

  photos :IDog[];
  errorMessage: String;
  closeResult: string;
  dogToEdit: any;
  modalReference: any;

  constructor(private _productService: ProductService, private modalService: NgbModal) {

   }

  open(content, dog) {
    this.dogToEdit= dog;
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  disableButton (){
    return !this.newDog[0].img ||
    !this.newDog[0].name || 
    !this.newDog[0].price ||
    !this.newDog[0].description ||
    !this.newDog[0].provider
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      photos=>this.photos =photos,
      error => this.errorMessage =<any> error); 

      console.log(this.photos);
  }

  addDog():void{

    
    
    this._productService.addProducts(this.newDog[0]).subscribe(
      resp=>{
        
        this.photos.push(resp);    
      }
    )  

    this.newDog= [{_id:'', name:'', price:'', description:'', provider: [], img:'', size:'', create_at:'', update_at: ''}];

  }


  removeDog(dog : IDog):void{

    console.log("entro a removeDog");
    //arrow function
   
    //normal

    console.log(dog.name);    
    console.log(this.photos.length);
    console.log(dog._id);
    
    
    this._productService.removeProducts(dog._id).subscribe(resp=>{
      console.log(resp);
      this.photos = this.photos.filter( (x)=>{
        return x.name != dog.name
      });
    });

  }

  editProduct():void{
    let self = this;
    this._productService.putProducts(this.dogToEdit._id, this.dogToEdit).subscribe(resp=>{
      self.modalReference.close();
    })
  }
}
