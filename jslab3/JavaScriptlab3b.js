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

let user_cards = document.getElementsByClassName('cards');
div1.innerText = "-Your advice will appear here-";
button.addEventListener('click', function(event){
    let card_list = []
    for (let i = 0; i < user_cards.length; i++) {
        console.log(user_cards[i].value);
        card_list.push(user_cards[i].value);
    }
    console.log(card_list);
    div1.innerText = blkJkAdvice(card_list[0], card_list[1], card_list[2]);
});
