export default class GotService {
  _apiBase = "https://www.anapioficeandfire.com/api";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch${url}, recived ${res.status}`);
    }
    return await res.json();
  };

  getAllItems = async typeItems => {
    const res = await this.getResource(`/${typeItems}`);
    return res.map(this._transformItem);
  };

  getItem = async (typeItems, idItem) => {
    const res = await this.getResource(`/${typeItems}/${idItem}`);
    return this._transformItem(res);
  };

  isSet = data => {
    for (const key in data) {
      if (!data[key]) {
        data[key] = "no data :(";
      }
    }
    return data;
  };

  _extractId = item => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  _transformItem = data => {
    if (Array.isArray(data)) {
      return data.map(item => {
        this.isSet(item);
        item["id"] = this._extractId(item);
        return item;
      });
    } else {
      this.isSet(data);
      data["id"] = this._extractId(data);
      return { ...data };
    }
  };

}

