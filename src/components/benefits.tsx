import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Enhanced Collaboration',
  'Improved Accuracy and Efficiency',
  'Cost and Time Savings',
  'Better Project Visualization',
  'Reduced Rework and Clashes',
  'Superior Quality Deliverables',
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Advantages of Our Services</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Our services offer key advantages for your projects.
            </p>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
