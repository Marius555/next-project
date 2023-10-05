"use server"
import { NextResponse } from 'next/server'
import PocketBase from 'pocketbase';


const pb = new PocketBase('http://127.0.0.1:8090');


export async function middleware(request) {
 
  if (request.nextUrl.pathname.startsWith('/account')) {
    
    if(await request.cookies.has("pb_auth")){
      return NextResponse.next()
    }
    else{
      return NextResponse.redirect(new URL('/', request.url))
    }
  //   try {
  //     const trying = await request.cookies.get("pb_auth")
  //     pb.authStore.loadFromCookie(`${trying.name}=${trying.value}`)
  //   }
  //   catch {
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
  
    if(await request.cookies.has("pb_auth")){
      return NextResponse.redirect(new URL('/', request.url))
    }
    else{
      const resp = NextResponse.next()
      return resp
     
    }

    }
  
  if (request.nextUrl.pathname.startsWith('/registration')) {
    if(await request.cookies.has("pb_auth")){
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/logout')) {
    const response = NextResponse.next()
    try {
      response.cookies.delete("pb_auth")
    } catch (error) {
      return
    }
    return response
  }




}

