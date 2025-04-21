export const getAccessToken = (): string | null => localStorage.getItem('access_token');
export const getRefreshToken = (): string | null => localStorage.getItem('refresh_token');

export const setTokens = (access: string, refresh: string): void => {
    localStorage.setItem('refresh_token', refresh);
    localStorage.setItem('access_token', access);
}

export const removeTokens = (): void => {
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('access_token')

    window.location.href = '/';
}


