"use client";

import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Sheet defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-6xl" side={"right"}>
        <VisuallyHidden.Root>
          <SheetTitle>Modal</SheetTitle>
          <SheetDescription>Modal</SheetDescription>
        </VisuallyHidden.Root>

        {children}
      </SheetContent>
    </Sheet>
  );
}
