import HeaderLink from '@/components/header/HeaderLink';

const Header = () => {
  return (
    <div className="flex mb-8 border-b-2 border-black darK:border-white">
      <HeaderLink href={'/'}>Home</HeaderLink>

      <HeaderLink href={'/people'}>Characters</HeaderLink>

      <HeaderLink href={'/vehicles'}>Vehicles</HeaderLink>
    </div>
  );
};

export default Header;
