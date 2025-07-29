import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Benefits } from '@/components/benefits';
import { ServiceAreas } from '@/components/service-areas';
import { Cta } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Benefits />
        <ServiceAreas />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
