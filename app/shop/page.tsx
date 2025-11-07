
import { supabase } from '../../lib/supabaseClient'
import ProductCard from '../../components/ProductCard'
export const dynamic = 'force-dynamic'
export default async function Shop(){
  const { data: products } = await supabase.from('products').select('*').eq('is_active', true).order('created_at', { ascending: false })
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products?.map(p => <ProductCard key={p.id} p={p}/>)}
      </div>
    </div>
  )
}
