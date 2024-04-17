type QueryKeyType = string[] | ((...args: any[]) => string[]);

type QueryOptionType<T = unknown> = {
  queryKey: QueryKeyType;
  queryFn: () => Promise<T>;
};

type QueryOptionsType = {
  [key: string]: <T = unknown>(...args: any[]) => QueryOptionType<T>
};

export type {
    QueryOptionType,
    QueryOptionsType
}