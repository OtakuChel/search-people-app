function paramsFormatter(searchValue) {
  let arrValues = searchValue.split(",");
  let arrParams = arrValues.map((el) => {
    if (!!isNaN(el)) {
      return `username=${el.trim()}`;
    }
    return `id=${el.trim()}`;
  });
  return arrParams.join("&");
}

export default paramsFormatter;
