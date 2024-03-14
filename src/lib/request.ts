/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Makes an asynchronous HTTP request to the specified URL with the given options.
 *
 * @param {string} url - The URL to make the request to
 * @param {object} options - The options for the HTTP request, including method, body, and params
 * @return {Promise<any>} A promise that resolves with the JSON response from the server
 */
interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

export const request = async (url: string, options: RequestOptions = {}): Promise<any> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const { method = "GET", body, params } = options;

  let queryParams = "";
  if (params && Object.keys(params).length > 0) {
    queryParams = new URLSearchParams(params).toString();
  }

  const requestOptions: RequestOptions = {
    headers,
    ...options,
  };
  if (body && (method === "POST" || method === "PUT")) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const http_url = `${process.env.NEXT_PUBLIC_BASE_URL}${url}${queryParams ? `?${queryParams}` : ""}`;
    const response = await fetch(http_url, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const ok = <T>(data: T): Response => {
  return Response.json({ data, ok: true, message: "SUCCESS" });
};

export const fail = (message: string | null): Response => {
  return Response.json({
    data: null,
    ok: false,
    message: message ?? "FAIL",
  });
};
