import { useAuth } from '../Context/AuthProvider'
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
 
    const {user}= useAuth()
    if (!user) {
        return children;     
    }

  return <Navigate to="/login" replace/>
}

export default PrivateRoute


