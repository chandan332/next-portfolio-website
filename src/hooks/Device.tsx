"use client";
import { useEffect, useState } from "react";

export default function useDevice() {
  let [device, setDevice] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  useEffect(() => {
    function deterDevice() {
      if (window.innerWidth < 572) {
        setDevice({ ...device, mobile: true });
      } else if (window.innerWidth < 768) {
        setDevice({ ...device, tablet: true });
      } else {
        setDevice({ ...device, desktop: true });
      }
    }
    deterDevice();
    window.addEventListener("resize", deterDevice);
    return () => {
      window.removeEventListener("resize", deterDevice);
    };
  }, []);

  return [device];
}
