export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export const parseJSON = (response) => response.json();

export const grapnhQlRequest = (request) => {
  return window.fetch('/graphql', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ query:  request })
  })
    .then(checkStatus)
    .then(parseJSON);
};
