import Login from "../pages/Login"
import Quizz from "../pages/Quizz"
import Cadastro from "../pages/Cadastro"

export const RoutesMappingApplication = [
    {
        page: <Login />,
        path: "/"
    },
    {
        page: <Quizz/>,
        path: "/Quizz"
    },
    {
        page: <Cadastro/>,
        path: "/Cadastro"
    }
]