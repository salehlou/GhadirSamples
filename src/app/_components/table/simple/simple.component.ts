import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonModel } from 'src/app/_models/person.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  currentRow = -1;
  hoveredIndex: number | undefined;
  selectionTable = new SelectionModel<PersonModel>(false, []);
  dataSourceTable: MatTableDataSource<PersonModel> | undefined;

  displayedColumns: string[] = ['Barcode', 'Name', 'Family', 'IsActive', 'Level',
    'StartDate', 'ExpireDate', 'AccessGroupName',
    'CardsCount', 'FingersCount', 'FacesCount', 'IrisesCount'];

  constructor() {

  }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons() {
    this.dataSourceTable = new MatTableDataSource(res.items);
    this.dataSourceTable.paginator = this.paginator;
    this.dataSourceTable.sort = this.sort;

  }
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTable.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceTable.paginator) {
      this.dataSourceTable.paginator.firstPage();
    }
  }
