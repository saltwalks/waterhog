const config = {
    baseUrl: 'https://jsonplaceholder.typicode.com',
}

export async function getSomething(query: string) {
    return fetch(`${config.baseUrl}/todos/1?${query}`);
}
