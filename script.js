let coins = []

async function loadCrypto(){

const response = await fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
)

coins = await response.json()

displayCoins(coins)

}

function displayCoins(data){

const container = document.getElementById("crypto-list")

container.innerHTML = ""

data.forEach(coin => {

const card = document.createElement("div")

card.className = "crypto-card"

card.innerHTML = `
<h3>${coin.name}</h3>
<p>Price: $${coin.current_price}</p>
<p>24h Change: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
`

container.appendChild(card)

})

}

loadCrypto()
