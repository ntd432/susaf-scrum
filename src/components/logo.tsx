import Image from "next/image";
import { webTool } from "@/assets/logos";

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 relative">
        <Image
          src={webTool}
          alt="Web Tool logo"
          className="dark:hidden"
          role="presentation"
          quality={100}
        />

        <Image
          src={webTool}
          alt="Web Tool logo"
          className="hidden dark:block"
          role="presentation"
          quality={100}
        />
      </div>
      <span className="text-xl font-bold ml-2">ImpactAgile</span>
    </div>
  );
}
