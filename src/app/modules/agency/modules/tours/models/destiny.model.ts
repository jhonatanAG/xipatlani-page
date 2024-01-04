export interface DestinyCard {
  id: number;
  image: string;
  name: string;
}

export interface DestinyInfo {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface RespDestinations {
  pagination: Pagination;
  destinationInfo: DestinyInfo[];
}

export interface DestinyDetail {
  id: number;
  image: string;
  html_info: string;
}

export interface Pagination {
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
}