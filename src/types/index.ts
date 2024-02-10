export type LoadListType<T> = {
    count: number;
    next?: string;
    previous?: string;
    results: T[];
}

export type ListItem = {
    name: string;
    url: string;
}