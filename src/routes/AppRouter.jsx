import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

const AuthStatus = {
  notAuthenticated: "not-authenticated",
  authenticated: "authenticated",
}

export const AppRouter = () => {
  const authStatus = AuthStatus.authenticated;
  console.log(authStatus)
  return (
    <Routes>
      {authStatus === AuthStatus.notAuthenticated ? (
        <Route path='/auth/*' element={<LoginPage />} />
      ) : (
        <Route path='/*' element={<CalendarPage />} />
      )}

      <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
