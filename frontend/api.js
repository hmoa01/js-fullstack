class Api {
  async getData(method, url, data) {
    return new Promise((resolve, reject) => {
      let xml = new XMLHttpRequest();
      xml.open(method, url, true);
      xml.setRequestHeader("Content-Type", "application/json");
      xml.onreadystatechange = () => {
        if (xml.readyState === 4 && xml.status === 200) {
          resolve(JSON.parse(xml.responseText));
        }
      };
      xml.send(JSON.stringify(data));
    });
  }
}

const api = new Api();
