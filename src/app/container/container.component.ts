import {NgModule, Component, OnInit,ViewChild } from '@angular/core';
import { ApicallService } from '../apicall.service';
 import { PaginatePipeArgs } from 'ngx-pagination';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
// import { count } from 'console';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatFormField } from '@angular/material/form-field';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatCard, MatCardActions } from '@angular/material/card';
import { MatSelect } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  
})




export class ContainerComponent implements OnInit {
  
    
  // ngAfterViewInit(){
  //   this.dataSource=new MatTableDataSource(ELEMENT_DATA);
   



 

 data:any[]=[]
 data2:any[]=[]
 book_detailes:any[]=[]
  key :string='';
  value:any='Title';

totalpages:any
  
type:any
  pagesize:number=25
  current_page:number = 1;
  page:any
  menu:any
 pageSizeOption=[5,10,15,20]
from:any=0
to:any=0
available_books:any=[]
pageSlice=this.book_detailes.slice(0,2845)
showMoreContent: boolean = false;
total:any=this.book_detailes.length
placeholder='Search Title'
searchPage:any
option:any
id:any



// authorarray:any=this.data.slice(1,6)
sliceArray(startIndex: number, endIndex: number): any[] {
  return this.data.slice(startIndex, endIndex);
}
sliceArray2(startIndex: number, endIndex: number): any[] {
  return this.data2.slice(startIndex, endIndex);
}
  

flag:number=0;
  constructor(private service:ApicallService,private dialog:MatDialog) { }

        
  
 

    array=[{"id":1,'key':'Title'},{"id":2,'key':'Author'},{'id':3,'key':'subject'},{'id':4,'key':'ICBN'},{'id':5,'key':'DDC'}]
    
  ngOnInit(): void {
    this.service.getPosts().subscribe((res)=>{
      // console.warn('result',res)
      this.data=res.authors;
    
  
    })
    // this.book_detailes=[...Array().keys()].map((i) => `Item ${i + 1}`)
  

    this.service.getPosts().subscribe((res)=>{
      // console.warn('result',res.subjects[2].book_subject)
      this.data2=res.subjects;
    
     })
     
    
     
     
      this.service.getPost(this.key,this.type,this.pagesize).subscribe((res)=>{
        // console.warn('book',res.data.details.data.length)
       this.book_detailes=res.data.details.data
       this.from=res.data.details.from
       this.to=res.data.details.to
       this.total=res.data.details.total
       console.log(length)
       this.data2=res.subjects;
       this.totalpages=this.total/this.pagesize
       
        
    
       this.current_page=this.page
       
       
               
       
      //  this.totalpages=res.data[3].length
      })
    } 
    changeKeyValue(eventData:Event){
    
      this.key=(<HTMLInputElement>eventData.target).value;
      console.log(this.key)
    }
    // changeOptionValue(eventData:Event){
    //   this.value=(<HTMLInputElement>eventData.target).value;
    //   console.log(this.value)
    // }
    
     
     changeAuthor(author:any){
      this.key = author;
      this.type = 2
      this.value='Author';
    
      
     }
     changeSubject(subject:any){
      this.key = subject;
      this.type=3
      this.value='subject'
      
     }
     Title(title:any){
      this.key='Search Title'
      this.type=1
      this.placeholder='hello'
     }
     Author(placeholder:any){
      this.placeholder='Search Author'
      this.type=2

     }
     Subject(){
      this.key='Search Subject'
      this.type=3
     }
     Callno(){
      this.key='Search CALL NUMBER'
      this.type=4
     }
     Icbn(){
      this.key='Search ICBN'
      this.type=5
     }
     Ddc(){
      this.key='Search DDC'
      this.type=6
     }

    toggleShowMore() {
      this.showMoreContent = !this.showMoreContent;
    }
    
    increment() {
      if (this.current_page < this.totalpages) {
        this.current_page++;
      }
    }
    decrement() {
      if (this.current_page > 1) {
        this.current_page--;
      }
    }
  

    
  // changeTextValue(eventData:Event){
  // this.text=(<HTMLInputElement>eventData.target).value;
  //    }
  
    

     

  
  getBooks(){
    console.log(this.key,this.type);
    
  
      this.service.getPost(this.key,this.type,this.pagesize,this.current_page ? this.current_page :undefined).subscribe({
        next:(res)=>{
          console.log(res);
           this.book_detailes=res.data.details.data;
              this.flag=1;
             this.total=res.data.details.total
              this.from=res.data.details.from;
              this.to=res.data.details.to;
              this.totalpages=(this.total/this.pagesize)
              console.log(this.totalpages)
              this.page=this.current_page
          console.log(this.book_detailes.length)
          },
        error:(error)=>{
          console.error(error);
          
        }
      })
    }
    getBook(){
      this.value=this.option.id
      console.log(this.option)
    }
    

 
  
  openDialog(book:any){
    this.dialog.open(DialogBoxComponent,{
      width:'800px',
      height:'500px',
      // enterAnimationDuration:'1000ms',
      data:book
      
    
  
  
  })
  console.log(this.book_detailes)

  
  }

}
    
