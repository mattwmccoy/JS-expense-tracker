const account = {
    name: "Matt McCoy",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let totalAccount = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        //return `${this.name} has $${totalExpenses} in expenses.`
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income, $${totalExpenses} in expenses.`
    }
}



account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
account.addIncome("Job", 1000)
console.log(account.getAccountSummary())

//Challenge 1
//Expense -> description: "string", amount: number
//addExpense -> description, amount - add a new object onto array with correct data
//getAccountSummary -> total up all expenses -> Matt McCoy has $1250 in expenses

//Challenge 2
//1. add an income array to account
//2. add income method -> description: "string", amount: number
//3. Tweak getAccountSummary
//Matt McCoy has a balance of $10. $100 in income, $90 in expenses. 