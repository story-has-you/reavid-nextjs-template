/**
 * Makes an asynchronous HTTP request to the specified URL with the given options.
 *
 * @param {string} url - The URL to make the request to
 * @param {object} options - The options for the HTTP request, including method, body, and params
 * @return {Promise<any>} A promise that resolves with the JSON response from the server
 */
export const request = async (
  url: string,
  options: { method?: string; body?: any; params?: Record<string, any> } = {},
): Promise<any> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const { method = "GET", body = null, params } = options;

  let queryParams = "";
  if (params && Object.keys(params).length > 0) {
    queryParams = new URLSearchParams(params as Record<string, string>).toString();
  }

  const requestOptions: RequestInit = {
    headers,
    ...options,
  };
  if (body && (method === "POST" || method === "PUT")) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const http_url = `${process.env.NEXT_PUBLIC_API_URL}${url}${queryParams ? `?${queryParams}` : ""}`;
    const response = await fetch(http_url, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const ok = (data: any): Response => {
  return Response.json({ data, ok: true, message: "SUCCESS" });
};

export const fail = (message: string | null): Response => {
  return Response.json({
    data: null,
    ok: false,
    message: message ?? "FAIL",
  });
};
