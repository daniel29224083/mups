import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Badge from '../common/Badge'
import Button from '../common/Button'
import { siteInfo } from '../../data/content'

const MotionArticle = motion.article

function ProductCard({ product }) {
  const availabilityTone =
    product.availability === 'In Stock'
      ? 'success'
      : product.availability === 'Limited Stock'
        ? 'warning'
        : 'default'

  return (
    <MotionArticle
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_45px_-30px_rgba(56,189,248,0.6)] backdrop-blur-sm"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="group relative aspect-[4/3] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge tone={availabilityTone}>{product.availability}</Badge>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-white">{product.name}</h3>
            <p className="mt-1 text-xs text-slate-400">{product.condition}</p>
          </div>
          <p className="text-lg font-bold text-cyan-300">${product.price}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-slate-300">
          <Badge>{product.storage}</Badge>
          <Badge>{product.batteryHealth}% Battery</Badge>
          <Badge>{product.brand}</Badge>
        </div>

        <p className="text-sm text-slate-300">{product.highlight}</p>

        <div className="flex flex-wrap items-center gap-2">
          <Button as={Link} to={`/shop/${product.slug}`} className="flex-1 justify-center">
            View Details
          </Button>
          <Button
            as="a"
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="flex-1 justify-center"
          >
            <MessageCircle size={16} />
            Inquiry
          </Button>
        </div>
      </div>
    </MotionArticle>
  )
}

export default ProductCard
