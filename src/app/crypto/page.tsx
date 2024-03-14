import { CryptoBTC } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const CryptoValue = await CryptoBTC();

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  return (
    <>
      <h2 className="text-center my-10 text-2xl">CRYPTO</h2>
      <div className="flex">
        {Object.keys(CryptoValue).map((cryptoKey) => (
          <Card key={cryptoKey} className="mr-10">
            <CardHeader>
              <CardTitle className="uppercase">{cryptoKey}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$ {CryptoValue[cryptoKey].usd}</p>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-gray-600">
                Última actualización:{" "}
                {formatDate(CryptoValue[cryptoKey].last_updated_at)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
