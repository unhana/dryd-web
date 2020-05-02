import request from 'umi-request';

export async function register(params) {
  return request('/api/user/register', {
    method: 'POST',
    data: params,
  });
}
