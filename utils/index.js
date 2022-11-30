export function arrangeData(data) {
  return data.reduce((acc, cur) => {
    let res = {};
    if (!res[cur.key]) {
      res[cur.key] = cur.values.reduce((initial, value) => {
        if (!initial[value.key]) {
          initial[value.key] = value.value;
        }

        return initial;
      }, {});
    }

    acc.push(res);
    return acc;
  }, []);
}
