import { ContentType } from "@enums/content-type.enum";
import { ResponseType } from "@enums/response-type.enum";

interface CustomRequestInit extends RequestInit {
    query?: Record<string, any>;
    json?: RequestInit["body"] | Record<string, any>;
}

export async function useFetch<T>(
    url: string,
    options?: CustomRequestInit,
    contentType = ContentType.applicationJson,
    responseType = ResponseType.json,
) {
    const apiBase = import.meta.env.VITE_FRONTEND_URL || "";
    const newURL = new URL(`${apiBase}${url}`);

    // Handle query parameters
    if (options?.query) {
        const query = new URLSearchParams();
        Object.entries(options.query).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                query.append(key, String(value));
            }
        });
        newURL.search = query.toString();
    }

    // Handle request body
    if (options?.json !== undefined && options?.json !== null) {
        options.body = JSON.stringify(options.json);
    }

    let headers = {
        "Accept": "application/json",
        "Content-Type": contentType,
    };

    // When uploading a file, the content type should be removed
    // Response should be json and data should be sent as formData
    if (contentType === ContentType.applicationMultipartFormData) {
        //@ts-ignore
        delete headers["Content-Type"];
    }

    if (options?.headers) {
        headers = {
            ...headers,
            ...options.headers,
        };
    }

    const resp = await fetch(newURL, {
        ...options,
        headers,
        credentials: "include",
    });
    if (resp.status === 204) return resp.statusText as T;

    if (!resp.ok) {
        let errorDetail: string;
        try {
            const errorData = await resp.json();
            errorDetail = errorData.detail || resp.statusText;
        } catch (e) {
            errorDetail = resp.statusText;
        }

        // Format error message for useHandleError
        const errorMessage = JSON.stringify({
            code: resp.status,
            detail: errorDetail,
        });

        throw new Error(errorMessage);
    }
    // Handle successful response based on responseType
    if (responseType === ResponseType.json) {
        return await resp.json();
    } else if (responseType === ResponseType.blob) {
        return (await resp.blob()) as T;
    } else if (responseType === ResponseType.text) {
        return (await resp.text()) as T;
    }
    return resp;
}