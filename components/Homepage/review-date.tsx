"use client";

import { useEffect, useState } from "react";
import { intlFormatDistance } from "date-fns";

export function ReviewDate({ date }: { date: Date }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (!now) {
    return <span className="text-sm text-gray-500">—</span>;
  }

  return <>{intlFormatDistance(now, date)}</>;
}
