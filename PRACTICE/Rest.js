function shoppingCard(...prices) {
    console.log(prices)
    let total = 0;
    for (i = 0; i < prices.length; i++) {
      total += prices[i]
    }
    return total;
  }
  
  console.log(shoppingCard(100, 100, 200))