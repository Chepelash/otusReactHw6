import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h4>{children}</h4>;
};
