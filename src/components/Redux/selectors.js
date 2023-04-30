export const getContacts = (state) => state.contacts.items;

export const getIsLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.error;

export const getFilter = (state) => state.filter;

export const getUser = (state) => state.auth.user;

export const getUserName = (state) => state.auth.user.name;

export const getUserEmail = (state) => state.auth.user.email;

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
