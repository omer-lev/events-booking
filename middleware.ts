import { authMiddleware } from "@clerk/nextjs/server";
 

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhooks/clerk',
    '/api/webhook/stripe',
    '/api/webhooks/stripe',
    'api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhooks/clerk',
    '/api/webhook/stripe',
    '/api/webhooks/stripe',
    'api/uploadthing'
  ]
})
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};