/// <reference path="module08_loans.ts" />

namespace LoanPrograms {
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
  
    /*  TODO Update the calculateConventionalLoanPayment function. */
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
    export function calculateInterestOnlyLoanPayment(
      loanTerms: Loans.Loan
    ): string {
      let payment: number;
      payment =
        loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
      return "The interest only loan payment is " + payment.toFixed(2);
    }
  
    /*  TODO Update the calculateConventionalLoanPayment function. */
    // Calculates the monthly payment of a conventional loan
    export function calculateConventionalLoanPayment(
      loanTerms: Loans.ConventionalLoan
    ): string {
      let interest: number = calculateInterestRate(loanTerms.interestRate);
      let payment: number;
      payment =
        (loanTerms.principle * interest) /
        (1 - Math.pow(1 / (1 + interest), loanTerms.numberOfMonths));
      return "The conventional loan payment is " + payment.toFixed(2);
    }
  
    export function calculateInterestRate(interestRate: number): number {
      let interest: number = interestRate / 1200;
      return interest;
    }
  }