import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../helpers/routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => 
        <Route key={path} path={path} element={element} />
      )}
    </Routes>
  );
};
