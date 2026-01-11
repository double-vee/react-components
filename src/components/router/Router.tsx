import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from '../layout/Layout';
import { HomePage } from '../../pages/home/Home';
import { CategoryPage } from '../../pages/components/Components';
import { ComponentPage } from '../../pages/component/Component';
import { CartPage } from '../../pages/cart/Cart';
import { SignupPage } from '../../pages/signup/Signup';
import { LoginPage } from '../../pages/login/Login';
import { NoResultsPage } from '../../pages/no-results/NoResults';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="components">
            <Route index element={<CategoryPage />} />
            <Route path="component/:componentId" element={<ComponentPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NoResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
