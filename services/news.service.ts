import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import request from '../hooks/https-request';
import { ApiResponse, INews } from '@/types';

const service = {
  getList: (params?: Record<string, unknown>) => request.get('/news', { params }),
  getById: (id: string, params: Params) => request.get(`/news/${id}`, { params }),
};

interface InnerPage {
  data: INews
}

interface Params {
  [key: string]: unknown;
}

export const useNewsGet = ({
  params
}: {
  params?: Record<string, unknown>
} = {}) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ['news', params],
    queryFn: () => service.getList(params).then(res => res.data),
    keepPreviousData: true,
  });
};

export const useNewsByIdGet = ({
  id, 
  params, 
  options
}: {
  id: string;
  params?: Params;
  options?: UseQueryOptions<INews, Error>;
}) => {
  return useQuery<INews, Error>({
    queryKey: ['news', id, params],
    queryFn: () => service.getById(id, params as Params).then(res => res?.data),
    keepPreviousData: true,
    ...options,
  });
};
