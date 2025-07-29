import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <section id="contact" className="w-full py-12 md:py-16 lg:py-20 border-t">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Ready to Streamline Your Next Project?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let's discuss how our BIM services can bring value and efficiency to your work. Get in touch for a free consultation.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          
        </div>
      </div>
    </section>
  );
}
