// components/SchemaScript.tsx - Component to inject JSON-LD structured data
'use client';

import { useEffect } from 'react';

interface SchemaProps {
  schema: Record<string, any>;
}

export default function SchemaScript({ schema }: SchemaProps) {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.innerHTML = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, [schema]);

  return null;
}
