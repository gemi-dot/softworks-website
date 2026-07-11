import type { DjangoFetchResult, DjangoHealthResponse } from "@/types/api";

const DEFAULT_API_BASE_URL = "http://localhost:8000/api";

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_DJANGO_API_URL ?? DEFAULT_API_BASE_URL;
}

export async function fetchDjangoHealth(): Promise<DjangoFetchResult> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/health/`, {
      method: "GET",
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(800),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        ok: false,
        data: null,
        error: `Request failed with status ${response.status}`,
      };
    }

    const data = (await response.json()) as DjangoHealthResponse;

    return { ok: true, data };
  } catch (error) {
    return {
      ok: false,
      data: null,
      error: error instanceof Error ? error.message : "Unknown API error",
    };
  }
}
