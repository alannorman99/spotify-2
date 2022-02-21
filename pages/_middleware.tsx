import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET! })
  const url = req.nextUrl.clone()

  //1) the token exists
  if (url.pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  if (!token && url.pathname !== '/login') {
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }
}
