import Books from "./assets/Books";

export const getBooks = () => Promise.resolve({ ok: true, data: Books });
