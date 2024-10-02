import { authMiddleware } from '@clerk/nextjs/server'
export default authMiddleware({
  // An array of public routes that don't require authentication.
  publicRoutes: ["/api/webhook/clerk"],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ["/api/webhook/clerk"],
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
/* import { authMiddleware, redirectToSignIn } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ["/api/webhook/clerk"], // Rutas públicas
  ignoredRoutes: ["/api/webhook/clerk"],

  afterAuth(auth, req, evt) {
    // Redirige a los usuarios no autenticados a la página de inicio de sesión
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // Maneja usuarios autenticados pero sin organización
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== '/') {
      return NextResponse.redirect('/');
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: [
    // Ignora archivos estáticos y Next.js internos
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Siempre aplica a rutas API
    '/(api|trpc)(.*)',
  ],
};
 */