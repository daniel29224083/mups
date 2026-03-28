function SearchFilterBar({
  search,
  onSearch,
  filters,
  onFilterChange,
  sortBy,
  onSortChange,
  options,
}) {
  return (
    <section className="sticky top-[72px] z-30 rounded-2xl border border-white/10 bg-slate-900/85 p-4 backdrop-blur-xl">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <label className="lg:col-span-2">
          <span className="sr-only">Search phone models</span>
          <input
            type="search"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Search model, example iPhone 14"
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
        </label>

        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-slate-100"
          aria-label="Sort products"
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest price</option>
          <option value="highest">Highest price</option>
          <option value="popular">Most popular</option>
        </select>

        <select
          value={filters.brand}
          onChange={(event) => onFilterChange('brand', event.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-slate-100"
          aria-label="Filter by brand"
        >
          {options.brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <select
          value={filters.condition}
          onChange={(event) => onFilterChange('condition', event.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-slate-100"
          aria-label="Filter by condition"
        >
          {options.conditions.map((condition) => (
            <option key={condition} value={condition}>
              {condition}
            </option>
          ))}
        </select>

        <select
          value={filters.storage}
          onChange={(event) => onFilterChange('storage', event.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-slate-100"
          aria-label="Filter by storage"
        >
          {options.storages.map((storage) => (
            <option key={storage} value={storage}>
              {storage}
            </option>
          ))}
        </select>

        <select
          value={filters.availability}
          onChange={(event) => onFilterChange('availability', event.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-slate-100"
          aria-label="Filter by availability"
        >
          {options.availability.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>

        <label className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-slate-200">
          <span className="mb-1 block text-xs text-slate-400">Battery Health</span>
          <input
            type="range"
            min="70"
            max="100"
            value={filters.batteryHealth}
            onChange={(event) => onFilterChange('batteryHealth', Number(event.target.value))}
            className="w-full accent-cyan-300"
          />
          <span className="text-xs">{filters.batteryHealth}% and above</span>
        </label>

        <label className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-slate-200">
          <span className="mb-1 block text-xs text-slate-400">Max Price (${filters.priceRange})</span>
          <input
            type="range"
            min="400"
            max="1700"
            step="50"
            value={filters.priceRange}
            onChange={(event) => onFilterChange('priceRange', Number(event.target.value))}
            className="w-full accent-cyan-300"
          />
        </label>
      </div>
    </section>
  )
}

export default SearchFilterBar
