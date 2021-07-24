import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit {
  @Input() programs:any

  constructor() { }

  ngOnInit(): void {
  }

}
