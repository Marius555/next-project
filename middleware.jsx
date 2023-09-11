"use server"
import { NextResponse } from 'next/server'
import PocketBase from 'pocketbase';

export async function middleware(request) {
  const pb = new PocketBase("http://127.0.0.1:8090")

  try {
    const trying = await request.cookies.get("pb_auth")
    pb.authStore.loadFromCookie(`${trying.name}=${trying.value}`)
  }
  catch {
    return NextResponse.redirect(new URL('/', request.url))
  }

}

export const config = {
  matcher: "/account",
}