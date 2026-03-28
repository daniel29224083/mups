import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Page Not Found</h1>
      <p className="mt-3 text-slate-300">The page you are looking for does not exist or has been moved.</p>
      <div className="mt-6">
        <Button as={Link} to="/">
          Return Home
        </Button>
      </div>
    </section>
  )
}

export default NotFoundPage
