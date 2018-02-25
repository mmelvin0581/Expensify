import moment from 'moment';

/** Gets the visible expenses.
 * Takes in the two states of the app expenses and filters which is destructed.
 *
 * Returns the filtered and sorted array.
 */
export default (expenses, {
    text, sortBy, startDate, endDate
}) =>
    expenses
        .filter((expense) => {
            // if there is a match, return the match, else not
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            // sort based on the match from above
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
            }
        });
