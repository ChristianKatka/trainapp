import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainService } from '../services/train.service';
import { NgForm } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Train } from '../models/train.model';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit, AfterViewInit {



  displayedColumns: string[] = ['trainNumber', 'speed', 'timestamp'];
  dataSource = new MatTableDataSource<Train>();

  // Used to sort table data
  @ViewChild(MatSort) sort: MatSort;
  // How many rows of data is displayd per page
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
  }
  // This function runs after page is loaded
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Show info about trains that are going faster than user input
   * 
   * @param userInputSpeed speed that user inputted
   */
  public getTrainsSpeed(userInputSpeed: NgForm) {
    this.trainService.getTrains().subscribe(res => {
      const movingTrains = res.filter(filtered => {
        return filtered.speed >= userInputSpeed.value.speed;
      });
      this.dataSource = movingTrains;
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
