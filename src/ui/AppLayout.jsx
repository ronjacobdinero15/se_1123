import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  )
}

export default AppLayout
