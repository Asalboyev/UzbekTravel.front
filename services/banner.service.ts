import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import request from '../hooks/https-request';
import { IBanner, IBannerResponse } from '@/types';

const service = {
  getList: (params?: Record<string, unknown>) => request.get('/banners', { params }),
};

interface Params {
  [key: string]: unknown;
}

export const useBannerGet = ({params}: {params: Params}) => {
  return useQuery<IBannerResponse, Error>({
    queryKey: ['banners', params],
    queryFn: () => service.getList(params).then(res => res.data),
    keepPreviousData: true,
  });
};
