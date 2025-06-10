export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const method = options?.method?.toUpperCase() ?? "GET";

  const headers: HeadersInit = {
    ...(method !== "GET" && method !== "DELETE"
      ? { "Content-Type": "application/json" }
      : {}),
    ...options?.headers,
  };

const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Fetch error: ${res.status} ${res.statusText} - ${error}`);
  }

  const text = await res.text();
  return text ? (JSON.parse(text) as T) : ({} as T);
}
