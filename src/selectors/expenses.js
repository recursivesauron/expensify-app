//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        const bFirst = 1
        const aFirst = -1
        
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? bFirst : aFirst;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? bFirst : aFirst;
        }
    });
}

export default getVisibleExpenses;