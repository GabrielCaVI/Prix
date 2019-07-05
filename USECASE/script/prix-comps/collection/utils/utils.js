import { LodashUtils } from "@bentoboxes/nova-utils";
export function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
/**
 * Sort a list of object items by an specific field in a specific order
 * @param {Array} items The items to be sorted
 * @param {string} field  The field name for filtering the items
 * @param {string} direction The direction in which the items will be sorted
 */
export function sortItemsByField(items, field, direction = SORTING_DIRECTIONS.ASC.valueOf()) {
    const sortStringsFn = (o) => o[field];
    direction = direction.toLowerCase();
    return LodashUtils.orderBy(items, sortStringsFn, direction);
}
export var SORTING_DIRECTIONS;
(function (SORTING_DIRECTIONS) {
    SORTING_DIRECTIONS["ASC"] = "asc";
    SORTING_DIRECTIONS["DESC"] = "desc";
})(SORTING_DIRECTIONS || (SORTING_DIRECTIONS = {}));
