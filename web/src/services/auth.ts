export const isAuth = () => {
  if (localStorage.getItem('token') !== null ) {
    return true
  }
  return false;
}