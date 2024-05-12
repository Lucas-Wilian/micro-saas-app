// type SidebarProps = {
//   paths: Array<{
//     label: string;
//     href: string;
//   }>;
// };

import { cn } from '@/lib/utils';
import Link from 'next/link';

// export function Sidebar({ paths }: SidebarProps) {
//   return (
//     <main className='flex items-center justify-center h-screen'>
//       <nav>
//         {paths.map((path) => (
//           <a key={path.href} href={path.href}>
//             {path.label}
//           </a>
//         ))}
//       </nav>
//     </main>
//   );
// }

export type SiderBarProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function Sidebar({ className, children }: SiderBarProps) {
  return (
    <aside
      className={cn([
        'border-r border-border flex flex-col space-y-6',
        className,
      ])}
    >
      {children}
    </aside>
  );
}

export function SidebarHeader({
  className,
  children,
}: SiderBarProps) {
  return (
    <header className={cn(['px-6', className])}>{children}</header>
  );
}

export function SidebarHeaderTitle({
  className,
  children,
}: SiderBarProps) {
  return <h2 className={cn(['', className])}>{children}</h2>;
}

export function SidebarMain({ className, children }: SiderBarProps) {
  return <main className={cn(['px-3', className])}>{children}</main>;
}

export function SidebarNav({ className, children }: SiderBarProps) {
  return <nav className={cn(['', className])}>{children}</nav>;
}

export function SidebarNavHeader({
  className,
  children,
}: SiderBarProps) {
  return <header className={cn(['', className])}>{children}</header>;
}

export function SidebarNavHeaderTitle({
  className,
  children,
}: SiderBarProps) {
  return (
    <div
      className={cn([
        'text-xs uppercase text-muted-foreground ml-3',
        className,
      ])}
    >
      {children}
    </div>
  );
}

export function SidebarNavMain({
  className,
  children,
}: SiderBarProps) {
  return (
    <main className={cn(['flex flex-col', className])}>
      {children}
    </main>
  );
}

type SideBarLinkProps = {
  href: string;
  active?: boolean;
};

export function SidebarNavLink({
  className,
  children,
  href,
  active,
}: SiderBarProps<SideBarLinkProps>) {
  return (
    <Link
      href={href}
      className={cn([
        'flex items-center text-xs px-3 py-2 rounded-md ',
        active && 'bg-secondary',
        className,
      ])}
    >
      {children}
    </Link>
  );
}

export function SidebarFooter({
  className,
  children,
}: SiderBarProps) {
  return (
    <footer
      className={cn([
        'p-6 mt-auto border-t border-border',
        className,
      ])}
    >
      {children}
    </footer>
  );
}
