import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more-less',
  templateUrl: './show-more-less.component.html',
  styleUrls: ['./show-more-less.component.css']
})
export class ShowMoreLessComponent implements OnInit {
  isContentVisible = false;
  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
