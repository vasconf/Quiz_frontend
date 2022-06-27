import Login from "../pages/Login"
import Quiz from "../pages/Quiz"
import Cadastro from "../pages/Cadastro"

export const RoutesMappingApplication = [
    {
        page: <Login />,
        path: "/"
    },
    {
        page: <Quiz/>,
        path: "/Quiz"
    },
    {
        page: <Cadastro/>,
        path: "/Cadastro"
    }
]