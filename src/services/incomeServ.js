const baseURL = '/api/income';

export const getIncome = async () => {
    const response = await fetch(baseURL);
    return await response.json();
};

export const addIncome = async (incomeData) => {
    const response = await fetch(`${baseURL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(incomeData),
    });
    return await response.json();
};
