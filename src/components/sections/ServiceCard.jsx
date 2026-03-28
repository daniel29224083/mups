import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Button from '../common/Button'

const MotionArticle = motion.article

function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Wrench

  return (
    <MotionArticle
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="inline-flex rounded-xl bg-cyan-400/15 p-3 text-cyan-200">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{service.description}</p>
      <p className="mt-3 text-xs uppercase tracking-wide text-cyan-200">Est. {service.turnaround}</p>
      <div className="mt-4">
        <Button variant="secondary">{service.cta}</Button>
      </div>
    </MotionArticle>
  )
}

export default ServiceCard
