import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TalksDataSource } from './talks-datasource';
import { TalksService } from './talks.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css'],
})
export class TalksComponent implements OnInit {

  constructor(private talksService: TalksService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TalksDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'speakers'];

  ngOnInit() {
    this.dataSource = new TalksDataSource(this.paginator, this.sort, this.talksService);
  }
}
