"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./ai.module.scss";

export default function DynamicLibraryPage() {
  const params = useParams();
  const [appName, setAppName] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    if (params.library && Array.isArray(params.library)) {
      const [encodedAppName, encodedIframeSrc] = params.library;
      if (encodedAppName) setAppName(decodeURIComponent(encodedAppName));
      if (encodedIframeSrc) setIframeSrc(decodeURIComponent(encodedIframeSrc));
    }
  }, [params.library]);

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.spinner}>
          <div className={styles.spinner1}></div>
        </div>
      )}{" "}
      {/* Display loader */}
      {iframeSrc && (
        <iframe
          src={iframeSrc}
          frameBorder="0"
          width="100%"
          height="624px"
          title={appName}
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoading(false)} // Hide loader when iframe is loaded
        ></iframe>
      )}
    </div>
  );
}
