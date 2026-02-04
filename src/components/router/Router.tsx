import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from '../layout/Layout';
import { HomePage } from '../../pages/home/Home';
import { ProductPage } from '../../pages/products/Products';
import { ProductDetailsPage } from '../../pages/products/product/Product';
import { SearchPage } from '../../pages/search/Search';
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
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path="p/:productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NoResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
