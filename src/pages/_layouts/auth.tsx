import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <header>Autenticação</header>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
