const baseURL = '/api/reports';

export const getReports = async () => {
    const response = await fetch(baseURL);
    return await response.json();
};
