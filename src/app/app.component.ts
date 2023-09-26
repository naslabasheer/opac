import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'embase_demo';

  
constructor(private getApi:ApicallService){}
// openDialog(){
//   this.MatDialog.open(DialogBoxComponent,{
//     width:'600px',
//   })
  


ngOnInit(){
 
}

}
  

