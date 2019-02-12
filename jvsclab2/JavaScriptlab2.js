// import random


// def pick6():
function pick6(){
//     randCount = 0
    let randCount = 0;
//     lotto = []
    let lotto = [];
//     while randCount < 6:
    while (randCount < 6){
//         lotto.append(random.randint(1, 99))
        lotto.push(Math.ceil(Math.random() * 99));
//         randCount += 1
        randCount ++;
        
    };
//     return lotto
    return lotto;    
}


// def num_matches(lotto, ticket):
function num_matches(lotto, ticket){
//     winnings = 0
    let winnings = 0;
//     for i in range(len(lotto)):
    for (i = 0; i < lotto.length; i++) {
//         if lotto[i] == ticket[i]:
        if (lotto[i] === ticket[i]){
//             winnings += 1
            winnings ++;
        };
    };
//     return winnings
    return  winnings;
}


// balance = 0
let balance = 0;
// winBalance = 0
let winBalance = 0;
// tryCount = 0
let tryCount = 0;
// lotto = pick6()
let lotto = pick6();
// while tryCount < 100000:
while (tryCount < 100000){
//     balance -= 2
    balance -= 2;
//     ticket = pick6()
    ticket = pick6();
//     winnings = num_matches(lotto, ticket)
    winnings = num_matches(lotto, ticket);
//     if winnings == 1:
    if (winnings === 1){
//         winBalance += 4
        winBalance += 4;
    }
//     elif winnings == 2:
    else if (winnings === 2){
//         winBalance += 7
        winBalance +=7;
    }
//     elif winnings == 3:
    else if (winnings === 3){
//         winBalance += 100
        winBalance += 100;
    }
//     elif winnings == 4:
    else if (winnings === 4){
//         winBalance += 50000
        winBalance += 50000;
    }
//     elif winnings == 5:
    else if (winnings === 5){
//         winBalance += 1000000
        winBalance += 1000000;
    }
//     elif winnings == 6:
    else if (winnings === 6){
//         winBalance += 25000000
        winBalance += 25000000;
    };
//     tryCount += 1
    tryCount ++;
}

// balance += winBalance
balance += winBalance;
// ROI = (winBalance - 200000)/200000
ROI = (winBalance - 200000)/200000;
// print(f"After buying 100,000 lotto tickets (costing $200,000 total) your final account balance is ${balance}.")
alert("After buying 100,000 lotto tickets (costing $200,000 total) your final account balance is $" + balance + ".");
// print(f"You won a total of ${winBalance}")
alert("You won a total of $" + winBalance + "!");
// print(f"Your ROI is {ROI}. Congratulations!")
alert("Your ROI is " + ROI + ". Congratulations!");
