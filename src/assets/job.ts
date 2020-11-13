export interface Category{

    name: string;

}

export interface Result {

    categories: Array<Category>;
    company: {
       id: number;
       name: string;
       short_name: string;
       contents: string;
    };
    id: number;
    levels: object[];
    locations: object[];
    model_type: string;
    name: string;
    publication_date: string;
    refs: object;
    short_name: string;
    tags: any;
    type: string;


}

export interface Job{

    aggregations: any;
    items_per_page: number;
    page: number;
    page_count: number;
    results: Array<Result>;
    timed_out: boolean;
    took: number;
    total: number;

}
