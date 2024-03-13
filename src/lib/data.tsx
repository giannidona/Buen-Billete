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
