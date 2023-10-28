"use client";
import Link from "next/link";
import useDevice from "@/hooks/Device";
import { ModeToggle } from "../darkTheme/darkTheme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const Header = () => {
  const [device] = useDevice();
  return (
    <>
      <div className="flex fixed w-full py-2 px-4 top-0 shadow-lg bg-white dark:bg-gray-900">
        <h1 className="me-auto font-bold text-2xl">LOGO</h1>
        <ModeToggle />
        {device.desktop && (
          <ul className="flex gap-2">
            <li>
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <Button variant="ghost">About</Button>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <Button variant="ghost">Blog</Button>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <Button variant="ghost">Contact</Button>
              </Link>
            </li>
          </ul>
        )}
        {(device.mobile || device.tablet) && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <div className="hover:scale-110 rotate-90 ">|||</div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30 me-2">
              <DropdownMenu>
                <DropdownMenuItem>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/#about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/blog">blog</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/#contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </>
  );
};

export default Header;
