import Link from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';

const LinkComponent: FC<
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string | URL }
> = ({ href, children, className, ...props }) => {
  return (
    <Link
      className={`border-2 border-black dark:border-white rounded-md p-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black duration-150 ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
