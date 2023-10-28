"use client";
import { useDispatch } from "react-redux";
import { changeState } from "@/redux/features/animation-slice";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

export default function SubmitButton() {
  const dispatch = useDispatch();
  async function submit(e: React.FormEvent) {
    toast.success("submitted");
    dispatch(changeState({ isConfetti: true }));
    setTimeout(() => {
      dispatch(changeState({ isConfetti: false }));
    }, 10 * 1000);
  }
  return (
    <Button
      variant="outline"
      type="submit"
      onClick={submit}
      className={`w-full dark:bg-[#f06]`}
    >
      Submit
    </Button>
  );
}
