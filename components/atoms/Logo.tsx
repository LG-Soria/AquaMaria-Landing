interface LogoProps {
  className?: string;
  imageClassName?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", imageClassName = "" }: LogoProps) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/images/logo/logo2.png"
      alt="AquaMaría"
      width="733"
      height="393"
      className={`h-20 w-40 object-contain md:h-16 md:w-48 ${imageClassName}`}
    />
  </div>
);
