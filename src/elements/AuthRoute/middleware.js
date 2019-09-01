export const LOGIN_PATH = '/login'

export const checkAdmin = (store) => new Promise((rs, rj) => {
    setTimeout(() => {
        rj(LOGIN_PATH)
    }, 2000);
})