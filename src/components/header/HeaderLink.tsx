import LinkComponent from '@/components/ui/LinkComponent';
import { FC, ReactNode } from 'react';

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
}

const HeaderLink: FC<HeaderLinkProps> = ({ href, children }) => {
  return (
    <LinkComponent
      className="py-8 px-4 rounded-none border-none"
      href={href}
    >
      {children}
    </LinkComponent>
  );
};

export default HeaderLink;
