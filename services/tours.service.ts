import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import request from '../hooks/https-request';
import { ApiResponse, ITour } from '@/types';

const service = {
  getList: (params?: Record<string, unknown>) => request.get('/tours', { params }),
  getById: (id: string, params: Params) => request.get(`/tours/${id}`, { params }),
};

interface Params {
  [key: string]: unknown;
}

interface InnerPage {
   data: ITour
}

export const useToursGet = ({
  params,
  options
}: {
  params?: Params;
  options?: UseQueryOptions<ApiResponse, Error>;
} = {}) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ['tours', params],
    queryFn: () => service.getList(params).then(res => res.data),
    keepPreviousData: true,
    ...options
  });
};

export const useToursByIdGet = ({id, params, options }:
{
  id: string;
  params?: Params;
  options?: UseQueryOptions<InnerPage, Error>;
}) => {
  return useQuery<InnerPage, Error>({
    queryKey: ['tours', id, params],
    queryFn: () => service.getById(id, params as Params).then(res => res.data),
    keepPreviousData: true,
    ...options,

  });
};
