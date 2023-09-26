import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

url='https://qa.embase.in/backend/api/opac/get/all/author/subjects';
url2='https://qa.embase.in/backend/api/opac/search-books/'
  constructor(private http:HttpClient , private dialog:MatDialog) { }
  
 

  getPost(key:string,type:number,page_size:number,page_no?:number){
    if(page_size){

      return this.http.post<any>(`https://qa.embase.in/backend/api/opac/search-books/${page_size}?page=${page_no}`,{key:key,type:type})

    }else {
      return this.http.post<any>(`https://qa.embase.in/backend/api/opac/search-books/${page_size}`,{key:key,type:type})

    }
  }
  getPosts(){
    return this.http.get<any>(this.url)
     
    
  }
}
