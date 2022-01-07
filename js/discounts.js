// const originalPrice = 120;
// const discount = 18;

function calcPriceWithDiscount(price, discount){
    const percentageToApply = 100 - discount;
    const priceWithDiscount = (price * percentageToApply) / 100;
    return priceWithDiscount;
}

function calcPriceWithDiscountAuto() {
    let input = document.getElementById("InputPrice");
    const price = input.value;
    input = document.getElementById("InputDiscount");
    const discount = input.value;
    const priceWithDiscount = calcPriceWithDiscount(price, discount);
    const paragraphResult = document.getElementById("result");
    paragraphResult.innerText = `The final price to pay is $${priceWithDiscount}` 
}

// console.log({
//     originalPrice,
//     discount,
//     percentageToApply,
//     priceWithDiscount
// });
