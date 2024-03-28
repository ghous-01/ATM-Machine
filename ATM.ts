#! bin/usr/env node
import inquirer from "inquirer";

let balance: number = 10000;
let pin: number = 1234;

let answer = await inquirer.prompt([
  {
    name: "Pin",
    message: "Please Enter your Pin",
    type: "number",
  },
]);

if (answer.Pin === pin) {
  console.log("Correct Pin Code");
  let operation = await inquirer.prompt([
    {
      name: "Operations",
      type: "list",
      message: "Select one Operation",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);
  if (operation.Operations === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: " Enter the amount you want to withdraw",
        type: "number",
      },
    ]);
    if (amountAns.amount < balance) {
      balance -= amountAns.amount;
      console.log("Now your balance is" + balance);
    } else {
      console.log("insufficient balance");
    }
  } else if (operation.Operations === "Check Balance") {
    console.log("Your current balance is" + balance);
  } else if (operation.Operations === "Fast Cash") {
    let fast = await inquirer.prompt([
      {
        name: "FastCash",
        type: "list",
        message: "How much you want to withdraw",
        choices: ["1000", "2000", "5000"],
      },
    ]);
    if (fast.FastCash === "1000") {
      balance -= fast.FastCash;
      console.log(`"Your Remaining balance is" ${balance} `);
    }
    if (fast.FastCash === "2000") {
      balance -= fast.FastCash;
      console.log(`"Your Remaining balance is" ${balance} `);
    }
    if (fast.FastCash === "5000") {
      balance -= fast.FastCash;
      console.log(`"Your Remaining balance is" ${balance} `);
    }
  }
} else {
  console.log("Invalid Pin Code");
}
