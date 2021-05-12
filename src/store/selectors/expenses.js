import moment from 'moment';
//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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