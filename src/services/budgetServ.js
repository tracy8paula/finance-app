const baseURL = '/api/budget';

export const getBudget = async () => {
    const response = await fetch(baseURL);
    return await response.json();
};

export const updateBudget = async (budgetData) => {
    const response = await fetch(`${baseURL}/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(budgetData),
    });
    return await response.json();
};
