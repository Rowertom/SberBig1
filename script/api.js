const configApi = {
  url: "https://sb-cats.herokuapp.com/api/2/martynenko_alexey",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};


class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  _onResponse(res) {
    return res.ok ? res.json() : Promise.reject({ ...res, message: 'error' });
  }
  getCats() {
    return fetch(`${this._url}/show`, {
      method: "GET",
    }).then(this._onResponse);
  }
  getCat(id) {
    return fetch(`${this._url}/show/${id}`, {
      method: 'GET',
    }).then(this._onResponse);
  }
  getIds() {
    return fetch(`${this._url}/show/ids`, {
      method: "GET",
    }).then(this._onResponse);
  }
  addCat(body) {
    return fetch(`${this._url}/add`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._onResponse);
  }
  updCat(id, body) {
    return fetch(`${this._url}/update/${id}`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._onResponse);
  }
  deleteCat(id) {
    return fetch(`${this._url}/delete/${id}`, {
      method: 'DELETE',
    }).then(this._onResponse);
  }
}

export const api = new Api(configApi);