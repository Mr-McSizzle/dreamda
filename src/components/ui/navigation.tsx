import { Link, useLocation } from 'react-router-dom'
import { Button } from './button'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/submit', label: 'Submit' },
    { path: '/feed', label: 'Feed' },
    { path: '/simulate', label: 'Simulate' },
    { path: '/vote', label: 'Vote' },
  ]

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">dreamda</span>
          </Link>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  location.pathname === item.path && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navigation