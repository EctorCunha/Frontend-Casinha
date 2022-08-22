import { lazy, Suspense, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import { DashboardLayout } from './layouts/DashboardLayout';
import { LoadingScreen } from './components/LoadingScreen';
import Dashboard from './views/Dashboard';

const routes = [
  {
    path: '/',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: Dashboard,
  },
  {
    path: '/login',
    component: lazy(() => import('@/views/Login')),
  },
  {
    path: '/casinhas',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('./views/Products/List')),
  },
  {
    path: '/casinhas/criar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Products/Details')),
  },
  {
    path: '/casinhas/sucesscreation',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Success')),
  },
  {
    path: '/casinhas/:entityId/editar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Products/Details')),
  },
  {
    path: '/categorias',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Categories/List')),
  },
  {
    path: '/categorias/:entityId/editar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Categories/Details')),
  },
  {
    path: '/categorias/criar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Categories/Details')),
  },
  {
    path: '/usuarios',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Users/List')),
  },
  {
    path: '/usuarios/criar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Users/Details')),
  },
  {
    path: '/usuarios/:entityId/editar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Users/Details')),
  },
  {
    path: '/cidades',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Cities/List')),
  },
  {
    path: '/cidades/:criar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Cities/Details')),
  },
  {
    path: '/cidades/:entityId/editar',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Cities/Details')),
  },
  {
    path: '/reservas',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Reservations/List')),
  },
  {
    path: '/reservas/:entityId',
    guard: AuthGuard,
    layout: DashboardLayout,
    component: lazy(() => import('@/views/Reservations/Details')),
  },
];

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route, index) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component || Fragment;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}
