import { Pagination } from "src/app/global/generic-modules/paginator/paginator.component";


export interface ReportPagination {
  pagination: Pagination;
  reports: Report[];
}

export interface Report {
  id?: number;
  name: string;
  urlFile?: string;
  comments: string;
  month: string;
  year: number;
}