import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const pathname = request.nextUrl.pathname
  const isProtectedAdminRoute =
    pathname.startsWith('/admin') || pathname.startsWith('/dashboard')

  // refreshing the auth token
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const redirectWithCookies = (target: string) => {
    const url = request.nextUrl.clone()
    url.pathname = target
    if (target !== '/login') {
      url.search = ''
    }

    const redirectResponse = NextResponse.redirect(url)

    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie)
    })

    return redirectResponse
  }

  if (isProtectedAdminRoute) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('next', pathname)

      const redirectResponse = NextResponse.redirect(url)
      supabaseResponse.cookies.getAll().forEach((cookie) => {
        redirectResponse.cookies.set(cookie)
      })

      return redirectResponse
    }

    const { data: isAdmin, error: isAdminError } = await supabase.rpc('is_admin')

    if (isAdminError || !isAdmin) {
      return redirectWithCookies('/')
    }
  }

  return supabaseResponse
}