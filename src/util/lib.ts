type FetchApiResponseParams = {
    url: string
    method?: string
    body?: any
    headers?: HeadersInit
}

export const shortenWalletAddress = (address: string) => {
    if (!address || address.length <= 8) {
        return ''
    }

    return `${address.slice(0, 4)}...${address.slice(
        address.length - 4,
        address.length
    )}`
}

export async function fetchApiResponse<ResultType>({
    url,
    method,
    body,
    headers,
}: FetchApiResponseParams): Promise<ResultType | null> {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    }

    const response = await fetch(url, {
        method: method ?? 'GET',
        headers: headers ?? defaultHeaders,
        body: body ? JSON.stringify(body) : undefined,
    })

    // callers must null check
    return response.status === 404 ? null : await response.json()
}
