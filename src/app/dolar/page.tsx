import { DolarBlue, DolarOficial } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const DolarBlueData = await DolarBlue();

  const DolarOficialData = await DolarOficial();

  return (
    <>
      <h2 className="text-center my-10 text-2xl">DOLAR</h2>
      <div className="flex">
        <Card className="mr-10">
          <CardHeader>
            <CardTitle>DÓLAR BLUE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>COMPRA: {DolarBlueData.compra}</p>
            <p>VENTA: {DolarBlueData.venta}</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-gray-600">
              ultima actualización: {DolarBlueData.fechaActualizacion}
            </p>
          </CardFooter>
        </Card>
        <Card className="mr-10">
          <CardHeader>
            <CardTitle>DÓLAR OFICIAL</CardTitle>
          </CardHeader>
          <CardContent>
            <p>COMPRA: {DolarOficialData.compra}</p>
            <p>VENTA: {DolarOficialData.venta}</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs">
              ultima actualización: {DolarOficialData.fechaActualizacion}
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
