export const getPageCount = (totalCount: any, limit: number) => Math.ceil(totalCount / limit);

export const getPagesArray = (totalPages: any) => {
  const result: any = [];
  for (let i = 0; i < totalPages; i += 1) {
    result.push(i + 1);
  }
  return result;
};
