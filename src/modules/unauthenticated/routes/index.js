import { LoginScreen, RegisterScreen } from '../screens'

export const unauthRoutes = [
  {
    path: '/login',
    element: <LoginScreen />
  },

  {
    path: '/cadastrar', 
    element: <RegisterScreen/>
  }
]