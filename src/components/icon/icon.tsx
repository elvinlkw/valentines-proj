import * as Icons from '@/icons';

type IconType = keyof typeof Icons;

type IconProps = {
  icon: IconType;
  className: string;
};

export const Icon = ({ icon, className }: IconProps) => {
  const IconComponent = Icons[icon];

  if (!IconComponent) {
    return <></>;
  }

  return <IconComponent className={className} />;
};
