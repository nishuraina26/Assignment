import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { LaunchService } from '../service/launch.service';

import { FilterListComponent } from './filter-list.component';

@Injectable()
class MockLaunchService {
  constructor(private http: HttpClient) { }

  launchPrograms = [{ "flight_number": 4, "mission_name": "RatSat", "mission_id": [], "launch_year": "2008", "launch_date_unix": 1222643700, "launch_date_utc": "2008-09-28T23:15:00.000Z", "launch_date_local": "2008-09-28T11:15:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", "tbd": false, "launch_window": 0, "rocket": { "rocket_id": "falcon1", "rocket_name": "Falcon 1", "rocket_type": "Merlin C", "first_stage": { "cores": [{ "core_serial": "Merlin2C", "flight": 1, "block": null, "gridfins": false, "legs": false, "reused": false, "land_success": null, "landing_intent": false, "landing_type": null, "landing_vehicle": null }] }, "second_stage": { "block": 1, "payloads": [{ "payload_id": "RatSat", "norad_id": [33393], "reused": false, "customers": ["SpaceX"], "nationality": "United States", "manufacturer": "SpaceX", "payload_type": "Satellite", "payload_mass_kg": 165, "payload_mass_lbs": 363, "orbit": "LEO", "orbit_params": { "reference_system": "geocentric", "regime": "low-earth", "longitude": null, "lifespan_years": null, "epoch": "2020-12-21T02:41:06.000Z", "mean_motion": 14.84904616, "raan": 236.9673, "semi_major_axis_km": 6992.022, "eccentricity": 0.0012404, "periapsis_km": 605.214, "apoapsis_km": 622.56, "inclination_deg": 9.3453, "period_min": 96.975, "arg_of_pericenter": 85.029, "mean_anomaly": 275.1325 } }] }, "fairings": { "reused": false, "recovery_attempt": false, "recovered": false, "ship": null } }, "ships": [], "telemetry": { "flight_club": null }, "launch_site": { "site_id": "kwajalein_atoll", "site_name": "Kwajalein Atoll", "site_name_long": "Kwajalein Atoll Omelek Island" }, "launch_success": true, "links": { "mission_patch": "https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png", "mission_patch_small": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png", "reddit_campaign": null, "reddit_launch": null, "reddit_recovery": null, "reddit_media": null, "presskit": null, "article_link": "https://en.wikipedia.org/wiki/Ratsat", "wikipedia": "https://en.wikipedia.org/wiki/Ratsat", "video_link": "https://www.youtube.com/watch?v=dLQ2tZEH6G0", "youtube_id": "dLQ2tZEH6G0", "flickr_images": [] }, "details": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1", "upcoming": false, "static_fire_date_utc": "2008-09-20T00:00:00.000Z", "static_fire_date_unix": 1221868800, "timeline": { "webcast_liftoff": 5 }, "crew": null },
  { "flight_number": 5, "mission_name": "RazakSat", "mission_id": [], "launch_year": "2009", "launch_date_unix": 1247456100, "launch_date_utc": "2009-07-13T03:35:00.000Z", "launch_date_local": "2009-07-13T15:35:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", "tbd": false, "launch_window": 0, "rocket": { "rocket_id": "falcon1", "rocket_name": "Falcon 1", "rocket_type": "Merlin C", "first_stage": { "cores": [{ "core_serial": "Merlin3C", "flight": 1, "block": null, "gridfins": false, "legs": false, "reused": false, "land_success": null, "landing_intent": false, "landing_type": null, "landing_vehicle": null }] }, "second_stage": { "block": 1, "payloads": [{ "payload_id": "RazakSAT", "norad_id": [35578], "reused": false, "customers": ["ATSB"], "nationality": "Malaysia", "manufacturer": "Satrec", "payload_type": "Satellite", "payload_mass_kg": 200, "payload_mass_lbs": 440, "orbit": "LEO", "orbit_params": { "reference_system": "geocentric", "regime": "low-earth", "longitude": null, "semi_major_axis_km": 7048.9, "eccentricity": 0.001701, "periapsis_km": 658.775, "apoapsis_km": 682.755, "inclination_deg": 8.9865, "period_min": 98.161, "lifespan_years": null, "epoch": "2020-12-21T12:05:41.000Z", "mean_motion": 14.66968248, "raan": 133.3568, "arg_of_pericenter": 311.4972, "mean_anomaly": 48.3759 } }] }, "fairings": { "reused": false, "recovery_attempt": false, "recovered": false, "ship": null } }, "ships": [], "telemetry": { "flight_club": null }, "launch_site": { "site_id": "kwajalein_atoll", "site_name": "Kwajalein Atoll", "site_name_long": "Kwajalein Atoll Omelek Island" }, "launch_success": true, "links": { "mission_patch": "https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png", "mission_patch_small": "https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png", "reddit_campaign": null, "reddit_launch": null, "reddit_recovery": null, "reddit_media": null, "presskit": "http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit", "article_link": "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5", "wikipedia": "https://en.wikipedia.org/wiki/RazakSAT", "video_link": "https://www.youtube.com/watch?v=yTaIDooc8Og", "youtube_id": "yTaIDooc8Og", "flickr_images": [] }, "details": null, "upcoming": false, "static_fire_date_utc": null, "static_fire_date_unix": null, "timeline": { "webcast_liftoff": 5 }, "crew": null }]


  public getLaunchPrograms(): Observable<any> {
    return of(this.launchPrograms)
  }
  public getFilteredLaunchPrograms(): Observable<any> {
    return of(this.launchPrograms)
  }

}

describe('FilterListComponent', () => {
  let component: FilterListComponent;
  let fixture: ComponentFixture<FilterListComponent>;
  let mocService: MockLaunchService;
  let launchService: LaunchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      providers: [LaunchService, MockLaunchService, HttpClient, HttpHandler,
        { provide: LaunchService, useClass: MockLaunchService }],
      declarations: [ FilterListComponent ],
    })
    .compileComponents();
    const fixture = TestBed.createComponent(FilterListComponent);
    component = fixture.componentInstance;
    launchService = TestBed.inject(LaunchService)
    mocService = TestBed.inject(MockLaunchService);
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click year', () => {
    let year=2010
    component.yearClick(year);
    var data = mocService.launchPrograms;
    let spy = spyOn(launchService, 'getFilteredLaunchPrograms').and.returnValue(of(data));
    expect(component.getFilteredPrograms).toBeTruthy();

  });

  it('should click launch filter', () => {
    let launch=true
    component.launchFilterClick(launch);
    var data = mocService.launchPrograms;
    let spy = spyOn(launchService, 'getFilteredLaunchPrograms').and.returnValue(of(data));
    expect(component.getFilteredPrograms).toBeTruthy();

  });

  it('should click landing filter', () => {
    let launch=true
    component.landingFilterClick(launch);
    var data = mocService.launchPrograms;
    let spy = spyOn(launchService, 'getFilteredLaunchPrograms').and.returnValue(of(data));
    expect(component.getFilteredPrograms).toBeTruthy();

  });

  it('should click clear filter', () => {
    component.clearFilters();
    var data = mocService.launchPrograms;
    let spy = spyOn(launchService, 'getLaunchPrograms').and.returnValue(of(data));
    expect(component.getFilteredPrograms).toBeTruthy();

  });
});
