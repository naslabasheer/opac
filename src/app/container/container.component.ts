import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
 import { PaginatePipeArgs } from 'ngx-pagination';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
// import { count } from 'console';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';




@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  
})




export class ContainerComponent implements OnInit {
  // @ViewChild('paginator')paginator:MatPaginator
  
  // dataSource=MatTableDataSource<ContainerComponent>
  // ngAfterViewInit(){
  //   this.dataSource=new MatTableDataSource(ELEMENT_DATA);
  //   this.dataSource.paginator=this.paginator



 
item:any[]=[]
 data:any[]=[]
 data2:any[]=[]
 book_detailes:any[]=[]
  key :string='';
  value:any='Title';

totalpages:any
  type = 2;
  total:any=0
  pagesize:any=10
  page:number = 1;
  menu:any
 pageSizeOption=[5,10,15,20]
from:number=0
to:number=0
available_books:any=[]
pageSlice=this.book_detailes.slice(0,5)
showMoreContent: boolean = false;

 

// authorarray:any=this.data.slice(1,6)
sliceArray(startIndex: number, endIndex: number): any[] {
  return this.data.slice(startIndex, endIndex);
}
sliceArray2(startIndex: number, endIndex: number): any[] {
  return this.data2.slice(startIndex, endIndex);
}
  
Option=[]
flag:number=0;
  constructor(private service:ApicallService,private dialog:MatDialog) { }
  
 

    array=['Title','Author','Subject','Call number','ICBN','DDC']
    
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
       this.book_detailes=res.data.details;
       console.log(res.length)
       this.total=res.length
      //  this.totalpages=res.data[3].length
      })
    } 
    changeKeyValue(eventData:Event){
    
      this.key=(<HTMLInputElement>eventData.target).value;
      console.log(this.key)
    }
     
     
     changeAuthor(author:any){
      this.key = author;
      this.type = 2
      this.value='Author';
      
     }
     changeSubject(subject:any){
      this.key = subject;
      this.type=2
      this.value='Subject';
     }

    toggleShowMore() {
      this.showMoreContent = !this.showMoreContent;
    }
  
    
//  changeTextValue(eventData:Event){
//  this.text=(<HTMLInputElement>eventData.target).value;
//     }
  
    // showFirstLastButtons(event:PageEvent){
    //   console.log(event)
    //   const startIndex=event.pageIndex *event.pageSize;
    //   let endIndex=startIndex+event.pageSize
    //   if(endIndex>this.book_detailes.length){
    //     endIndex=this.book_detailes.length
    //   }
    //   this.pageSlice=this.book_detailes.slice(startIndex,endIndex)
    //  }
    

     

  
  getBooks(){
    console.log(this.key);
    
  
      this.service.getPost(this.key,this.type,this.pagesize,this.page ? this.page : undefined).subscribe({
        next:(res)=>{
          console.log(res);
          
            if(this.key=='',this.type==2){
              this.book_detailes=res.data.details.data;
              this.flag=1;
              this.total=this.book_detailes.length;
             
              this.from=res.data.details.from;
              this.to=res.data.details.to;
            }
          //   this.book_detailes=res.data.details.data;
          // this.flag=1;
          // this.total=this.book_detailes.length;
         
          // this.from=res.data.details.from;
          // this.to=res.data.details.to;
        console.log('key',this.key,'type',this.type)
          console.log(this.book_detailes.length)
         
          
          
          
          
        },
        error:(error)=>{
          console.error(error);
          
        }
      })
      
    
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
