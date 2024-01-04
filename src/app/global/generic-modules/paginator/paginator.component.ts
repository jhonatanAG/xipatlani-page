import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface Pagination {
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

@Component({
  selector: 'gen-pagination',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() pagination!: Pagination;
  @Output() changePage = new EventEmitter<Pagination>();

  public listItems: number[] = [];

  constructor() { }
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listItems = [];
    for (let i = 1; i <= this.pagination.totalPages; i++) {
      this.listItems.push(i);
    }
  }

  selectPage(value: number): void {
    this.pagination.currentPage = value;
    this.changePage.emit(this.pagination);
  }

  nextPage(): void {
    this.selectPage(this.pagination.currentPage + 1);
  }

  previousPage(): void {
    this.selectPage(this.pagination.currentPage - 1);
  }
}
