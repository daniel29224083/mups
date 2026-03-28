import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import SectionTitle from '../components/common/SectionTitle'
import ProductCard from '../components/sections/ProductCard'
import { products } from '../data/products'
import { siteInfo } from '../data/content'

function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [activeImage, setActiveImage] = useState(product?.images?.[0])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.brand === product?.brand && item.id !== product.id).slice(0, 3),
    [product],
  )

  if (!product) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-3xl font-semibold text-white">Product Not Found</h1>
        <p className="mt-3 text-slate-300">This device may no longer be available.</p>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src={activeImage}
              alt={product.name}
              className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-xl border ${
                  activeImage === image ? 'border-cyan-300' : 'border-white/10'
                }`}
              >
                <img src={image} alt={`${product.name} preview`} className="h-24 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{product.brand}</p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{product.name}</h1>
          <p className="mt-3 text-3xl font-bold text-cyan-300">${product.price}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="accent">{product.condition}</Badge>
            <Badge tone="success">Battery {product.batteryHealth}%</Badge>
            <Badge>{product.storage}</Badge>
            <Badge>{product.availability}</Badge>
          </div>

          <p className="mt-5 text-sm text-slate-300">{product.highlight}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Button as="a" href={siteInfo.whatsapp} target="_blank" rel="noreferrer" className="w-full justify-center">
              <MessageCircle size={16} />
              WhatsApp Now
            </Button>
            <Button variant="secondary" className="w-full justify-center">
              Reserve This Phone
            </Button>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">Specifications</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Display: {product.specs.display}</li>
              <li>Chip: {product.specs.chip}</li>
              <li>Camera: {product.specs.camera}</li>
              <li>SIM: {product.specs.sim}</li>
              <li>OS: {product.specs.os}</li>
              <li>Warranty: {product.warranty}</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Highlights</h3>
            <div className="mt-3 grid gap-2">
              {product.features.map((feature) => (
                <p key={feature} className="inline-flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={15} className="text-cyan-300" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <SectionTitle title="Related Products" subtitle="More phones you may like." />
        <div className="grid gap-5 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProductDetailPage
