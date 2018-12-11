import Books from "./assets/Books";

export const getBooks = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ ok: true, data: Books });
    }, 3000);
  });
