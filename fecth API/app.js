let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]
}

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    }, 2000)
    call_production();
}

let production = () => {
    // console.log("order recived, starting production")
    setTimeout(() => {
        console.log("production has started")

        setTimeout(() => {
            console.log("the fruit has been chopped")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            }, 1000)
        }, 1000)
    }, 2000)
}

order(0,production)
