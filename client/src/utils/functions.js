export const isAuth = () => {
  if (localStorage.getItem('token') && localStorage.getItem('user')) {
    const userData = {
      auth: localStorage.getItem('token'),
      user: localStorage.getItem('user'),
    };
    return userData;
  } else {
    return '';
  }
};
