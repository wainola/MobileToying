import {FAKE_API_REST} from 'react-native-dotenv';
import mockData from './mocks';

// THIS SUCKS BUT IS PROVISIONAL
const url = 'some-url';
const headers = 'some-headers';
const method = 'POST';

const executeFetch = async (url, headers, method, data) =>
  FAKE_API_REST
    ? Promise.resolve({
        json: async () => {
          return mockData.login.post;
        },
      })
    : await fetch(url, {
        headers,
        method,
        body: JSON.stringify(data),
      });

const post = async ({data}) => {
  const response = await executeFetch(url, headers, method, data);
  const dataResponse = await response.json();
  return dataResponse;
};

export {post};
