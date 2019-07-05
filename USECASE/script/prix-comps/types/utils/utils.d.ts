export declare function format(first: string, middle: string, last: string): string;
/**
 * Sort a list of object items by an specific field in a specific order
 * @param {Array} items The items to be sorted
 * @param {string} field  The field name for filtering the items
 * @param {string} direction The direction in which the items will be sorted
 */
export declare function sortItemsByField(items: any, field: any, direction?: string): any;
export declare enum SORTING_DIRECTIONS {
    ASC = "asc",
    DESC = "desc"
}
