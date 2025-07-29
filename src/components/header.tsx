import Link from 'next/link';
import { Building } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold font-headline">BIM Services Florida</span>
        </Link>
      </div>
    </header>
  );
}
