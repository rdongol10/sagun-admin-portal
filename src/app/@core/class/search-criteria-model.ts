export class SearchCriteriaModel {
    pageNumber: number;
    pageSize: number;
    searchCriteria: any[];
    sortField: string;
    sortOrder: string;
    constructor() {
        this.pageNumber = 1;
        this.pageSize = 10;
        this.sortField = '';
        this.sortOrder = 'desc';
    }
}
