import request from 'umi-request';

export async function fakeAccountLogin(params) {
  return request('/api/user/login', {
    method: 'POST',
    data: params,
  });
}
