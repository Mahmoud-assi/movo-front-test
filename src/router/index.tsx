import { type RouteObject, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { MovoLayout } from '@/components/Layout'
import routes from './routes'
import { PageLoading } from '@/components/Shared/PageLoading'

export const DashboardPage = lazy(() => import('@/pages/Dashboard'))
// export const UserPage = lazy(() => import('src/pages/user'))
export const Page404 = lazy(() => import('@/pages/404'))

export const routesSection: RouteObject[] = [
  {
    element: (
      <MovoLayout>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </MovoLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: routes.users, element: <></> },
    ],
  },

  {
    path: routes.notFound,
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
]
