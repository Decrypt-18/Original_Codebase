const Storage = {
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },
  getItem(key: string) {
    return localStorage.getItem(key);
  },
  removeItem(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default Storage;
