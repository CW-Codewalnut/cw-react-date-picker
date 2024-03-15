import { useState, useEffect } from "react";

export function useMobileScreen() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 548);
    if (typeof window !== "undefined") {
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);

  return isMobile;
}
