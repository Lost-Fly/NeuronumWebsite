import About from "../pages/About";
import Login from "../pages/Login";
import Account from "../pages/Account";
import CallsMainTable from "../pages/CallsMainTable";
import DashBoards from "../pages/DashBoards/DashBoards";
import Error from "../pages/Error";


export const privateRoutes = [
    { path: '/about', element: <About /> },
    { path: '/account', element: <Account /> },
    { path: '/main_calls_table', element: <CallsMainTable /> },
    { path: '/dashboards', element: <DashBoards /> },
    { path: '/error', element: <Error /> },
]

export const publicRoutes = [
    { path: '/login', element: <Login /> },
]