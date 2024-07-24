/**
 * Makes an asynchronous HTTP request to the specified URL with the given options.
 *
 * @param {string} url - The URL to make the request to
 * @param {object} options - The options for the HTTP request, including method, body, and params
 * @return {Promise<any>} A promise that resolves with the JSON response from the server
 */
interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
  body?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  serialize?: boolean;
  headers?: Record<string, string>;
}

export const request = async (url: string, options: RequestOptions = {}): Promise<any> => {
  const { body, params, serialize = true, headers } = options;

  let queryParams = "";
  if (params && Object.keys(params).length > 0) {
    queryParams = new URLSearchParams(params).toString();
  }

  const requestOptions: RequestOptions = {
    headers,
    ...options,
  };
  if (body && serialize) {
    requestOptions.body = JSON.stringify(body);
    requestOptions.headers = {
      ...requestOptions.headers,
      "Content-Type": "application/json",
    };
  }

  let http_url;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    http_url = `${url}${queryParams ? `?${queryParams}` : ""}`;
  } else {
    http_url = `${process.env.NEXT_PUBLIC_DOMAIN}${url}${queryParams ? `?${queryParams}` : ""}`;
  }
  try {
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

export const get = (url: string, { arg }: { arg?: Record<string, string> }) => request(url, { params: arg });
export const post = async (url: string, { arg }: { arg: any }) => request(url, { method: "POST", body: arg });
