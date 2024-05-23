import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import Integrations from "./pages/Integrations";
import Examples from "./pages/Examples";
import DataCleanRoom from "./pages/DataCleanRoom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "documentation",
                element: <Documentation />,
            },
            {
                path: "integrations",
                element: <Integrations />,
            },
            {
                path: "examples",
                element: <Examples />,
            },
            {
                path: "DataCleanRoom",
                element: <DataCleanRoom />,
            },
        ],
    },
    {
        path: "*",
        element: <NoMatch />,
    },
], {
    basename: global.basename
})
