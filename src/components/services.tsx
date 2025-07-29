import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building2, Network, Wrench, Replace, ScanLine, GitMerge, AlertTriangle, Box, FileText, ClipboardCheck, Route, Users, FileCheck2, Clock, Component } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: 'Architectural BIM',
    description: 'Detailed 3D models for architectural design, visualization, and construction documentation.',
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    title: 'Structural BIM',
    description: 'Precise structural models for analysis, fabrication, and coordination to ensure structural integrity.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'MEP BIM Services',
    description: 'Coordinated Mechanical, Electrical, and Plumbing models to prevent clashes and optimize system performance.',
  },
  {
    icon: <Replace className="h-10 w-10 text-primary" />,
    title: 'CAD to BIM Modeling',
    description: 'Converting traditional CAD drawings into information-rich BIM models for enhanced project data.',
  },
  {
    icon: <ScanLine className="h-10 w-10 text-primary" />,
    title: 'Scan to BIM Conversion',
    description: 'Creating accurate BIM models from 3D laser scan data of existing structures and environments.',
  },
  {
    icon: <GitMerge className="h-10 w-10 text-primary" />,
    title: 'BIM Coordination',
    description: 'Integrating various models to detect and resolve clashes before construction begins.',
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-primary" />,
    title: 'MEP Clash Detection',
    description: 'Specialized clash detection for mechanical, electrical, and plumbing systems to ensure proper fit.',
  },
  {
    icon: <Box className="h-10 w-10 text-primary" />,
    title: 'Revit Family Creation',
    description: 'Developing custom, parametric Revit families for specific project requirements and standards.',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'MEP Coordination Drawings',
    description: 'Generating detailed drawings from coordinated MEP models for installation and fabrication.',
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: 'As-Built Modeling',
    description: 'Creating precise as-built models and drawings that reflect the final constructed state.',
  },
  {
    icon: <Route className="h-10 w-10 text-primary" />,
    title: 'BIM for Infrastructure',
    description: 'Applying BIM methodologies to civil engineering projects like roads, bridges, and utilities.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'BIM Consulting',
    description: 'Providing expert guidance on BIM implementation, strategy, and workflow optimization.',
  },
  {
    icon: <FileCheck2 className="h-10 w-10 text-primary" />,
    title: 'BIM Model Audit',
    description: 'Auditing BIM models for quality, compliance with standards, and data accuracy.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: '4D & 5D BIM Services',
    description: 'Integrating project schedules (4D) and cost information (5D) into BIM models.',
  },
  {
    icon: <Component className="h-10 w-10 text-primary" />,
    title: 'BIM for Modular Construction',
    description: 'Utilizing BIM to streamline design, fabrication, and assembly of modular building components.',
  }
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our BIM Services</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Tesla Outsourcing Services offers expert <Link href="https://www.teslaoutsourcingservices.com/usa/bim-services-florida.php" title="bim services florida" target="_blank" className="text-primary hover:underline">BIM Services Florida</Link> to support the state’s growing construction needs. We work with architects, engineers, and contractors to deliver accurate 3D models, smooth coordination, and full code compliance. We offer a comprehensive suite of BIM services Florida, ranging from design development to construction documentation, ensuring every project, big or small, runs efficiently and meets local building standards.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center flex flex-col items-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <CardHeader className="p-0 mb-4">
                {service.icon}
              </CardHeader>
              <CardTitle className="mb-2 font-headline text-lg">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
