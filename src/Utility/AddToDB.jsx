const getSotreBook = () => {
  const getBook = localStorage.getItem("readList");

  if (getBook) {
    const sotreBookData = JSON.parse(getBook);
    return sotreBookData;
  } else {
    return [];
  }
};

const addToStore = (id) => {
  const setStoreData = getSotreBook();

  if (setStoreData.includes(id)) {
    alert("already added");
  } else {
    setStoreData.push(id);
    const data = JSON.stringify(setStoreData);
    console.log(data)
    localStorage.setItem("readList", data);
  }
};

export { addToStore };
