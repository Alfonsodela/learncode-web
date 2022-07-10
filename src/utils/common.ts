export const sayHello = () => {
    return 'hello';
};

const TOKEN_NAME = 'api-token';

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('api-token');
}

export const setTokenToLocalStorage = (token: string) => {
    localStorage.setItem(TOKEN_NAME, token);
}