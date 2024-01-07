export function saveToLocalStorage<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
