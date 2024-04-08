import { fontSans } from "@/lib/fonts";

interface FontsProps {
  className?: string;
  children: React.ReactNode;
}

export const Fonts = {
  h1: (props: FontsProps) => (
    <h1
      className={`font-semibold text-primary max-w-[1200px] text-8xl tracking-tighter text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </h1>
  ),
  h2: (props: FontsProps) => (
    <h2
      className={`font-semibold text-primary max-w-[1200px] text-6xl tracking-tight text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </h2>
  ),
  h3: (props: FontsProps) => (
    <h3
      className={`font-semibold text-primary max-w-[1200px] text-4xl tracking-tight text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </h3>
  ),
  h4: (props: FontsProps) => (
    <h4
      className={`font-semibold text-primary max-w-[1200px] text-2xl tracking-tight text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </h4>
  ),
  h5: (props: FontsProps) => (
    <h5
      className={`font-semibold text-primary max-w-[1200px] text-lg tracking-tight text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </h5>
  ),

  bodySmall: (props: FontsProps) => (
    <p
      className={`font-medium text-primary max-w-[1200px] text-sm tracking-tight text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </p>
  ),
  bodyMedium: (props: FontsProps) => (
    <p
      className={`font-medium text-primary max-w-[1200px] text-base text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </p>
  ),
  bodyLarge: (props: FontsProps) => (
    <p
      className={`font-medium text-primary max-w-[1200px] text-xl tracking-tight text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </p>
  ),
  long: (props: FontsProps) => (
    <p
      className={`font-bold text-primary max-w-[1200px] text-3xl tracking-tight text-center ${props.className} ${fontSans.className}`}
    >
      {props.children}
    </p>
  ),
};
