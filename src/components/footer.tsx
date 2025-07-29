import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2025 Tesla Outsourcing Services. All rights reserved.</p>
    </footer>
  );
}
