import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieStore = cookies();

  //   if (request.cookies.has(accessTokenCookieName)) {
  //     console.log("has access token")
  //     if(request.nextUrl.pathname === '/') {
  //         const url = request.nextUrl.clone()
  //         url.pathname = '/stream'
  //         return NextResponse.redirect(url)
  //     }
  //   }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
