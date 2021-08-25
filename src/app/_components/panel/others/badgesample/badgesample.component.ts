import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badgesample',
  templateUrl: './badgesample.component.html',
  styleUrls: ['./badgesample.component.scss']
})
export class BadgesampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
