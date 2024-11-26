const baseURL = '/api/expenses';

export const getExpenses = async () => {
    const response = await fetch(baseURL);
    return await response.json();
};

export const addExpense = async (expenseData) => {
    const response = await fetch(`${baseURL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expenseData),
    });
    return await response.json();
};
