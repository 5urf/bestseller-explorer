"use client";

import ErrorDisplay from "@/components/ErrorDisplay";

export default function Error({ error, reset }: IErrorProps) {
  return <ErrorDisplay error={error} reset={reset} />;
}
