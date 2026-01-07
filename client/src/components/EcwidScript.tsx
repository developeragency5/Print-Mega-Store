import { useEffect, useState } from "react";

declare global {
  interface Window {
    xMinicart: (style: string) => void;
    xProductBrowser: (...args: string[]) => void;
    ec: any;
  }
}

interface EcwidScriptProps {
  storeId: string;
}

export function EcwidScript({ storeId }: EcwidScriptProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "ecwid-script";
    
    // Check if script already exists
    if (document.getElementById(scriptId)) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = `https://my.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2025-01-07`;
    script.id = scriptId;
    script.async = true;

    script.onload = () => {
      setLoaded(true);
      // Initialize minicart if needed when script loads
      if (window.xMinicart) {
        window.xMinicart("style=","layout=MiniAttachToProductBrowser");
      }
    };

    document.body.appendChild(script);

    return () => {
      // Typically we don't remove the script in SPAs as navigating back would break it
    };
  }, [storeId]);

  return null;
}
