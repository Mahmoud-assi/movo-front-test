import { type RouteObject, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { LinearProgress, linearProgressClasses, Stack } from '@mui/material'
import { rgba } from '@/utils/color'
import { MovoLayout } from '@/components/Layout'
import { motion } from 'framer-motion'
import routes from './routes'

export const DashboardPage = lazy(() => import('@/pages/Dashboard'))
// export const BlogPage = lazy(() => import('src/pages/blog'))
// export const UserPage = lazy(() => import('src/pages/user'))
// export const SignInPage = lazy(() => import('src/pages/sign-in'))
// export const ProductsPage = lazy(() => import('src/pages/products'))
export const Page404 = lazy(() => import('@/pages/404'))

const renderFallback = () => (
  <Stack
    justifyContent="center"
    alignItems="center"
    component={motion.div}
    minHeight="75dvh"
    height="100%"
    width="100%"
    spacing={2}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: ({ palette }) => rgba(palette.text.primary, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'primary.light' },
      }}
    />
  </Stack>
)

export const routesSection: RouteObject[] = [
  {
    element: (
      <MovoLayout>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </MovoLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: routes.users, element: <></> },
      //   { path: 'products', element: <ProductsPage /> },
      //   { path: 'blog', element: <BlogPage /> },
    ],
  },
  //   {
  //     path: 'sign-in',
  //     element: (
  //       <AuthLayout>
  //         <SignInPage />
  //       </AuthLayout>
  //     ),
  //   },
  {
    path: routes.notFound,
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
]
