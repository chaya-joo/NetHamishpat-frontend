import { Navigate, createBrowserRouter } from 'react-router-dom'
import paths from './paths'
import Login from '../pages/LoginPage'
import UserNotFound from '../pages/UserNotFoundPage'
import EnterCode from '../pages/EnterCodePage'
import ChooseAction from '../pages/ChooseActionPage'
import UploadFilePage from '../pages/UploadFilePage'
import LoadPage from '../pages/LoadPages'
import SentSuccessfullyPage from '../pages/SentSuccessfullyPage'
import CaseDetailsPage from '../pages/CaseDetailsPage'


export const router = createBrowserRouter(
    [
        {
            path: '',
            element: <Navigate to={paths.LOGIN} />
        },
        {
            path: paths.LOGIN,
            element: <Login />,
        },
        {
            path: paths.USER_NOT_FOUND,
            element: <UserNotFound />
        },
        {
            path: paths.ENTER_CODE,
            element: <EnterCode />
        },
        {
            path: paths.CHOOSE_ACTION,
            element:<ChooseAction />
        },
        {
            path: paths.UPLOAD_FILE,
            element:<UploadFilePage />
        },
        {
            path: paths.LOAD,
            element: <LoadPage />
        },
        {
            path: paths.SENT_SUCCESSFULLY,
            element: <SentSuccessfullyPage />
        },
        {
            path: paths.CASE_DETAILS,
            element: <CaseDetailsPage />
        }
    ]
)