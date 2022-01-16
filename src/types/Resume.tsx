export interface RSection {
    id: string;
    heading?: string;
    contents?: any;
}

export interface GridSection extends RSection {
    rows: any[];
    columns: any[];
}

export interface RRow {
    id: string;
    columns?: RColumn[];
    sections?: RSection[];
}

export interface RColumn {
    id: string;
    rows?: RRow[];
}

export interface IResume {
    id: string;
    columns: RColumn[];
}