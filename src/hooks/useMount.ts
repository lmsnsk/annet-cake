import { useState, useEffect } from "react";

export const useMount = (opened: boolean): boolean => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => setMounted(false), 300);
    }
  }, [opened]);

  return mounted;
};
