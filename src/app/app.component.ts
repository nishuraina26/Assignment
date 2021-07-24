import { Component, OnInit } from '@angular/core';
import { LaunchService } from './service/launch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  programs = [];
  isLoading: boolean = true;

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
    this.getLaunchPrograms();
    //this.isLoading = false
  }

  getLaunchPrograms(): void {
    this.launchService.getLaunchPrograms().subscribe(
      (programs) => {
        this.programs = programs;
        this.isLoading = false
      },
      (error) => {
        console.log(error);
        this.isLoading = false
      }
    );
   
  }

  onFiltered(filteredPrograms) {
    this.programs = filteredPrograms;
  }
}
