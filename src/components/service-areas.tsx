import Image from 'next/image';

export function ServiceAreas() {
  return (
    <section id="areas" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Image
            src="https://www.teslaoutsourcingservices.com/images/bim-florida.webp"
            alt="Florida map"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
            data-ai-hint="florida map"
          />
          <div>
            <div className="flex flex-col items-start justify-center space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Florida’s Evolving AEC Industry</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Florida's AEC industry is growing rapidly in 2025, with many large projects and strong residential demand. Major developments like the Universal Epic Universe theme park and Tampa’s Westshore Interchange show the state’s focus on progress. There's also a strong push for climate-resilient design to handle hurricanes and rising sea levels. BIM services play a key role by helping teams coordinate better, use sustainable materials, and plan for long-term durability. With BIM, Florida's construction is smarter, stronger, and ready for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
