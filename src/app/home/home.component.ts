import { Component, OnInit, ViewChild } from '@angular/core';
import { TrainService } from '../services/train.service';

import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // Which columns are displayd. *matHeaderRowDef="displayedColumns"
  displayedColumns: string[] = ['speed', 'timestamp', 'trainNumber'];
  dataSource = new MatTableDataSource<any>();
  trains = [];


    // Used to sort table data
    @ViewChild(MatSort) sort: MatSort;
    // how many rows of data per page is displayd
    @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
  }


  public getTrains(): void {
    this.trainService.getTrains().subscribe(res => {
      console.log(res);
      this.trains = res;
    })
  }


  // Show trains speed over 100
  public getTrainsSpeed(userInputSpeed: NgForm) {
    console.log('TÄs lukee: input:');
    console.log(userInputSpeed.value.speed);

    this.trainService.getTrains().subscribe(res => {
      const movingTrains = res.filter(filtered => {
        return filtered.speed >= userInputSpeed.value.speed;
      });
      console.log('liikkuvat junat');
      console.log(movingTrains);
      this.dataSource = movingTrains;
    })
  }
}
