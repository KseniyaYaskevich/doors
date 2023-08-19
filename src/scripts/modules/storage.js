export const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getData = key => JSON.parse(localStorage.getItem(key)) || [];
