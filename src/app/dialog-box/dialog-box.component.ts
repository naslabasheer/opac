import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ApicallService } from '../apicall.service';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
 
  
  
  
  inputdata:any=[]
  bookdata:any
  key=''
  type=2;
  pagesize=2845

  constructor(@Inject(MAT_DIALOG_DATA)public data:any ,private ref:MatDialogRef<DialogBoxComponent>,private service:ApicallService){ }

  ngOnInit(): void {

this.inputdata=this.data;
console.log(this.data)
this.bookdata=this.data

}
  
close(){
  this.ref.close('closing from detail')
  console.log("hekk")
} 
    
  


}
