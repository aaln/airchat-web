// @ts-ignore

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
}
