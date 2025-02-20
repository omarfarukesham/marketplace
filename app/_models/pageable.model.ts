import { PaginateType, PaginatedResponseType } from '../_types/api.type';

const paginate = (data: any): PaginateType => {
  return {
    perPage: data?.size,
    totalPages: data?.totalPages ? data?.totalPages : 1,
    totalElements: data?.totalElements,
    last: data?.last,
    first: data?.first,
    currentPage: data?.number,
  };
};

const paginatedResponse = <T>(data: any, itemModel: any): PaginatedResponseType<T> => {
  return {
    items:
      data?.content.map((item: any, index: number) =>
        itemModel({ ...item, serial: index + 1 + data.number * data.size }),
      ) || [],
    paginate: paginate(data),
  };
};

export default paginatedResponse;
