export declare class directory {
    el: HTMLElement;
    /**
     * Common attributes
     */
    data?: any;
    configuration?: any;
    styling?: any;
    /**
    *   STATE
    */
    internalItems: any[];
    letterItems: string[];
    letterItemsMobile: string[];
    toggleSelection(): void;
    filterByInput(): void;
    filterByCheckbox(check: any): void;
    /**
    * Lifecycle methods
    */
    init(): void;
    componentWillLoad(): void;
    render(): any;
    private sortItems;
    private filterLinks;
}
