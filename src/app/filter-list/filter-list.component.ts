import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LaunchService } from '../service/launch.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  @Output() filtered = new EventEmitter<any>();
  selectedYear: number;
  selectedlaunchFilter: string;
  selectedLandingFilter: string;

  filters = {
    years: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    launch: ["true", "false"],
    landing: ["true", "false"],
  };

  filter = {
    year: '',
    launchFilter: '',
    landingFilter: ''
  };

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
  }

  yearClick(year) {
    this.selectedYear = year;
    this.filter.year = year;
    this.getFilteredPrograms(this.filter);
  }

  launchFilterClick(launchFilter) {
    this.selectedlaunchFilter = launchFilter;
    this.filter.launchFilter = launchFilter;
    this.getFilteredPrograms(this.filter);
  }

  landingFilterClick(landingFilter) {
    this.selectedLandingFilter = landingFilter;
    this.filter.landingFilter = landingFilter;
    this.getFilteredPrograms(this.filter);
  }

  clearFilters() {
    this.selectedYear = null;
    this.selectedlaunchFilter = '';
    this.selectedLandingFilter = '';
    
    this.filter  = {
      year: '',
      launchFilter: '',
      landingFilter: ''
    };
    this.launchService.getLaunchPrograms().subscribe(
      (programs) => {
        this.filtered.emit(programs);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFilteredPrograms(filter) {
    this.launchService.getFilteredLaunchPrograms(filter).subscribe(
      (programs) => {
        this.filtered.emit(programs);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
