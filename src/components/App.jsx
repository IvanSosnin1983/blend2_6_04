import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from '../page/Homepage/Homepage';
import UsersPage from 'page/UsersPage/UsersPage';
import UsersDetailsPage from 'page/UsersDetailsPage/UsersDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UsersDetailsPage />} />
      </Route>
    </Routes>
  );
};
