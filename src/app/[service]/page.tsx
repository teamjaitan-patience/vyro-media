import { redirect } from "next/navigation";
import Home from "../page";

interface Props {
  params: Promise<{ service: string }>;
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const decodedService = decodeURIComponent(service);

  if (decodedService === "High-End Short Form") {
    redirect("/short-form");
  }

  return <Home />;
}
