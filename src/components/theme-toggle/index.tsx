import { Icons } from "@/components/icons";

export function ThemeToggle() {
  return (
    <label className="swap swap-flip">
      <input type="checkbox" className="theme-controller" value="dark" />
      <Icons.sun className="swap-off fill-current w-5 h-5" />
      <Icons.moon className="swap-on fill-current w-5 h-5" />
    </label>
  );
}
