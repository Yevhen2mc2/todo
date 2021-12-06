export const url = {
  list: "/",
  input: "/input",
  login: "/login",
  edit: {
    set: (id) => `/edit/${id}`,
    path: "/edit/:id",
  },
};
