"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { changeDark } from "@/redux/features/mode-slice";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const dispatch = useDispatch();
  const dark: boolean = useSelector((state: any) => state.mode.dark);
  const { setTheme } = useTheme();
  function toggleMode() {
    if (dark) {
      setTheme("light");
      dispatch(changeDark({ dark: false }));
    } else {
      setTheme("dark");
      dispatch(changeDark({ dark: true }));
    }
  }

  return (
    <Button variant="ghost" onClick={toggleMode}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
