export const calculatePagesCount = (totalItemsCount?: number, pageSize?: number): number => (
  totalItemsCount && pageSize ? Math.ceil(totalItemsCount / pageSize) : 1
);

export const noop = () => {
  // do nothing
};
