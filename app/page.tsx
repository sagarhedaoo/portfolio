import Portfolio from "@/components/Portfolio";
import { getAiUsage } from "@/lib/ai-usage";

export const revalidate = 3600;

export default async function Home() {
  const usage = await getAiUsage();
  return <Portfolio usage={usage} />;
}
