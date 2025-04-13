import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    //return NextResponse.redirect(new URL("/",request.url));

    if (request.nextUrl.pathname === "/time"){
        return NextResponse.rewrite(new URL("/",request.nextUrl));
    }

    
}

// export const config = {
//     matcher: "/hello",
// };