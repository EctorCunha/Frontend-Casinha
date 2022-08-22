import { Fragment } from 'react';
import { Routes as RRDRoutes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { AuthGuard } from '@/components/AuthGuard';
import { Home } from '@/pages/Home';
import { Error404 } from '@/pages/Error404';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { Product } from '@/pages/Product';
import { Reservation } from '@/pages/Reservation';
import { Category } from '@/pages/Category';
import { FilterSearch } from '@/pages/FilterSearch';
import { SuccessReservation } from '@/pages/Reservation/Success';
import { UserReservations } from '@/pages/UserReservations';
import { UserFavorites } from '@/pages/UserFavorites';
import { UserReviews } from '@/pages/UserReviews';
import { FAQs } from '@/pages/FAQs';

const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home,
  },
  {
    path: '*',
    layout: AuthLayout,
    component: Error404,
  },
  {
    path: '/login',
    layout: AuthLayout,
    component: Login,
  },
  {
    path: '/register',
    layout: AuthLayout,
    component: Register,
  },
  {
    path: '/products/:id',
    layout: MainLayout,
    component: Product,
  },
  {
    guard: AuthGuard,
    path: '/products/:id/reservation',
    layout: MainLayout,
    component: Reservation,
  },
  {
    path: '/category/:id',
    layout: AuthLayout,
    component: Category,
  },
  {
    path: '/search',
    layout: MainLayout,
    component: FilterSearch,
  },
  {
    path: '/successreservation',
    layout: AuthLayout,
    component: SuccessReservation,
  },
  {
    guard: AuthGuard,
    path: '/minhas-reservas',
    layout: MainLayout,
    component: UserReservations,
  },
  {
    guard: AuthGuard,
    path: '/favoritos',
    layout: MainLayout,
    component: UserFavorites,
  },
  {
    guard: AuthGuard,
    path: '/reviews',
    layout: MainLayout,
    component: UserReviews,
  },
  {
    path: '/faqs',
    layout: AuthLayout,
    component: FAQs,
  },
];

export function Routes() {
  return (
    <RRDRoutes>
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
    </RRDRoutes>
  );
}
