import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function PracticeLayout({
  children,
  designSlot,
  marketingSlot,
}: {
  children: React.ReactNode;
  designSlot: React.ReactNode;
  marketingSlot: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex w-3/4 mx-auto mt-8 gap-7">
        <Button asChild>
          <Link href={"/"}>Home</Link>
        </Button>

        <Button asChild>
          <Link href={"/development"}>Development</Link>
        </Button>

        <Button asChild>
            <Link href={"/testing"}>Testing</Link>
        </Button>

        <Button asChild>
          <Link href={"/design"}>Design</Link>
        </Button>

        <Button asChild>
          <Link href={"/design/art"}>Art</Link>
        </Button>
        
        <Button asChild>
          <Link href={"/marketing"}>Marketing</Link>
        </Button>
      </nav>
      <div className="mt-10 w-3/4 mx-auto flex gap-2">{designSlot}{marketingSlot}</div>
      <div className="mt-10 w-3/4 mx-auto">{children}</div>
    </>
  ); 
}
