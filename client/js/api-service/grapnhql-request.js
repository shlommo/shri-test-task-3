const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const parseJSON = (response) => response.json();

const requestAddr = 'http://localhost:3000';

export default (request) => {
  return window.fetch(`${requestAddr}/graphql`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query: request})
  })
      .then(checkStatus)
      .then(parseJSON);
};
