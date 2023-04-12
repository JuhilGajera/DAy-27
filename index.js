let user = {
  firstName: "Juhil",
  lastName: "Gajera",
  Country: "India",
  City: "Surat",
};

let userText = JSON.stringify(user);
localStorage.setItem("user", userText);
console.log(localStorage);

let student = [
  {
    firstName: "Juhil",
    lastName: "Gajera",
    age: 22,
    skills: "HTML",
    key: 1,
  },
  {
    firstName: "Milan",
    lastName: "Mgan",
    age: 42,
    skills: "CSS",
    key: 2,
  },
  {
    firstName: "MEET",
    lastName: "POLARA",
    age: 20,
    skills: "JAVASCRIPT",
    key: 3,
  },
];

let Student = JSON.stringify(student);
localStorage.setItem("student", Student);
console.log(localStorage);

let personAccount = {
  firstName: "Juhil",
  lastName: "Gajera",
  income: 20000,
  expenses: 10000,
  totalIncome: function () {
    return this.income;
  },
  totalExpense: function () {
    return this.expenses;
  },
  accountInfo: function () {
    return "Saving";
  },
  addIncome: function () {
    return 5000;
  },
  addExpense: function () {
    return 2000;
  },
  accountBalance: function () {
    return this.addExpense + this.addIncome;
  },
};
