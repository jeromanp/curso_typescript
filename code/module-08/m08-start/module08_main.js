/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */
var LoanPrograms;
(function (LoanPrograms) {
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
    /*  TODO Update the calculateConventionalLoanPayment function. */
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
    function calculateInterestOnlyLoanPayment(loanTerms) {
        var payment;
        payment =
            loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return "The interest only loan payment is " + payment.toFixed(2);
    }
    LoanPrograms.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    /*  TODO Update the calculateConventionalLoanPayment function. */
    // Calculates the monthly payment of a conventional loan
    function calculateConventionalLoanPayment(loanTerms) {
        var interest = calculateInterestRate(loanTerms.interestRate);
        var payment;
        payment =
            (loanTerms.principle * interest) /
                (1 - Math.pow(1 / (1 + interest), loanTerms.numberOfMonths));
        return "The conventional loan payment is " + payment.toFixed(2);
    }
    LoanPrograms.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
    LoanPrograms.calculateInterestRate = calculateInterestRate;
})(LoanPrograms || (LoanPrograms = {}));
/*  TODO Add reference paths. */
/*  TODO Update the function calls. */
var interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({
    principle: 30000,
    interestRate: 5,
});
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({
    principle: 30000,
    interestRate: 5,
    numberOfMonths: 180,
});
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
