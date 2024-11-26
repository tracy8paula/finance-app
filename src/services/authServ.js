const baseURL = '/api/auth';

export const login = async (email, password) => {
    const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
};

export const register = async (username, email, password) => {
    const response = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });
    return await response.json();
};
