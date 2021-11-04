const getCurrencies = (from: string) => {
  return fetch(
    `https://api.fastforex.io/fetch-all?from=${from}&api_key=7a946d40a9-8d56afe14f-r21f8y`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      return res;
    });
};

export default getCurrencies;
