// cardValue = {"A": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10}
let cardValue = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10
};
// def blkJkAdvice(card1, card2, card3):
function blkJkAdvice(card1, card2, card3){
//     cardTotal = cardValue[card1] + cardValue[card2] + cardValue[card3]
    let cardTotal = cardValue[card1] + cardValue[card2] + cardValue[card3];
//     # <17: hit!
//     if cardTotal < 17:
    if (cardTotal < 17){
//         return f"{cardTotal} Hit"
        return cardTotal + " Hit";
//     # >= 17 and < 21: stay.
//     elif cardTotal >= 17 > 21:
    } else if (cardTotal >= 17 && cardTotal < 21){
//         return f"{cardTotal} Stay"
        return cardTotal + " Stay";
//     # Exactly 21: Blackjack!
//     elif cardTotal == 21:
    } else if (cardTotal == 21){
//         return f"{cardTotal} *Blackjack!*"
        return cardTotal + " *BLACKJACK!*";
//     # >21: Busted
//     else:
    } else {
//         return f"{cardTotal} -Busted-"
        return cardTotal + " -Busted-";
    };
}


// card1 = input("What is your first card (number/letter only): ").upper()
let card1 = prompt("What is your first card (number/letter only): ").toUpperCase();
// card2 = input("What is your second card (number/letter only): ").upper()
let card2 = prompt("What is your second card (number/letter only): ").toUpperCase();
// card3 = input("What is your third card (number/letter only): ").upper()
let card3 = prompt("What is your third card (number/letter only): ").toUpperCase();
// print(blkJkAdvice(card1, card2, card3))
alert(blkJkAdvice(card1, card2, card3));
