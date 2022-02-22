import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ampoule',
  templateUrl: './ampoule.component.html',
  styleUrls: ['./ampoule.component.css']
})
export class AmpouleComponent implements OnInit {
  isAllume = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isAllume = !this.isAllume;
  }
}
