import { useMemo, useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import ProductCard from '../components/sections/ProductCard'
import SearchFilterBar from '../components/sections/SearchFilterBar'
import { productFilters, products } from '../data/products'

const initialFilters = {
  brand: 'All',
  condition: 'All',
  storage: 'All',
  availability: 'All',
  priceRange: 1700,
  batteryHealth: 70,
}

function ShopPage() {
  const [filters, setFilters] = useState(initialFilters)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('latest')

  const filteredProducts = useMemo(() => {
    let data = products.filter((product) => {
      const bySearch = product.name.toLowerCase().includes(search.toLowerCase())
      const byBrand = filters.brand === 'All' || product.brand === filters.brand
      const byCondition = filters.condition === 'All' || product.condition === filters.condition
      const byStorage = filters.storage === 'All' || product.storage === filters.storage
      const byAvailability =
        filters.availability === 'All' || product.availability === filters.availability
      const byPrice = product.price <= filters.priceRange
      const byBattery = product.batteryHealth >= filters.batteryHealth

      return bySearch && byBrand && byCondition && byStorage && byAvailability && byPrice && byBattery
    })

    data = [...data].sort((a, b) => {
      if (sortBy === 'lowest') return a.price - b.price
      if (sortBy === 'highest') return b.price - a.price
      if (sortBy === 'popular') return b.popularity - a.popularity
      return b.id.localeCompare(a.id)
    })

    return data
  }, [search, filters, sortBy])

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Shop Smartphones"
        title="Find Your Perfect Device"
        subtitle="Filter by brand, price, condition, storage, battery health, and availability."
      />

      <SearchFilterBar
        search={search}
        onSearch={setSearch}
        filters={filters}
        onFilterChange={updateFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        options={productFilters}
      />

      <p className="mt-5 text-sm text-slate-300">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'phone' : 'phones'}
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ShopPage
