export async function DolarBlue() {
  const DolarBlue = await fetch("https://dolarapi.com/v1/dolares/blue").then(
    (res) => res.json()
  );

  return DolarBlue;
}

export async function DolarOficial() {
  const DolarOficial = await fetch(
    "https://dolarapi.com/v1/dolares/oficial"
  ).then((res) => res.json());

  return DolarOficial;
}

export async function CryptoBTC() {
  const CryptoValue = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd&include_last_updated_at=true"
  ).then((res) => res.json());

  return CryptoValue;
}
