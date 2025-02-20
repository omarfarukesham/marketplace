export function isValidUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const stopScroll = (shouldStop: boolean) => {
  if (shouldStop) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

export const addContentTypeToHeaders = (headers: HeadersInit | undefined, data: Record<string, unknown> | FormData) => {
  const defaultContentType = 'application/json';

  let modifiedHeaders = headers;

  const contentTypeExists = headers && 'Content-Type' in headers; // do not override if explicitly mentioned in service
  const isFormData = data instanceof FormData; // do not assign any content type in case of form data, this causes issue

  if (!contentTypeExists && !isFormData) {
    modifiedHeaders = { ...headers, 'Content-Type': defaultContentType };
  }

  return modifiedHeaders;
};
