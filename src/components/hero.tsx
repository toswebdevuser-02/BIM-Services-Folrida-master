import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
              Florida’s Trusted Partner for Expert BIM Solutions
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Improve your building projects in Florida with expert BIM services. We provide 3D modeling, drafting, and smooth coordination to help your project succeed.
            </p>
          </div>
          <Image
            src="https://www.teslaoutsourcingservices.com/images/bim-country-banner.webp"
            alt="BIM model of a building"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
            data-ai-hint="architectural drawing building"
          />
        </div>
      </div>
    </section>
  );
}
