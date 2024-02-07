import { cn } from "@/lib/utils";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        `bg-card rounded-md shadow-md p-10 w-full h-full`,
        className
      )}
    >
      {children}
    </div>
  );
};
