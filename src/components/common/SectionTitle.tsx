import React, { ReactNode, ElementType } from "react";

interface SectionTitleProps {
  as?: ElementType;
  children: ReactNode;
  subtitle?: ReactNode;
  subtitleAs?: ElementType;
  colored?:ReactNode;
  coloredAs?:ElementType;
}

const SectionTitle = ({
  as: TitleTag = "h3",
  children,
  subtitle,
  colored,
  coloredAs:Colored = "span",
  subtitleAs: SubtitleTag = "h5",
}: SectionTitleProps) => {
  return (
    <div className="text-center md:text-left flex flex-col gap-y-3">
      {subtitle && (
        <SubtitleTag className="relative inline-flex items-center capitalize md:before:content-[''] md:before:w-5 md:before:h-[2px] md:before:bg-red-500 before:mr-2 text-xl text-secondary">
          {subtitle}
        </SubtitleTag>
      )}
      <TitleTag className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mt-1 leading-[1.2]">
        {children} <Colored className="text-secondary">{colored}</Colored> 
      </TitleTag>
    </div>
  );
};

export default SectionTitle;