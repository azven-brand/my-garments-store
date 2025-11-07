
import Link from 'next/link'
import { supabase } from '../lib/supabaseClient'
import ProductCard from '../components/ProductCard'
export default async function Home(){
  const { data: products } = await supabase.from('products').select('*').eq('is_active', true).order('created_at', { ascending: false }).limit(8)
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-gray-100 p-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">New Arrivals</h1>
        <p className="text-gray-600 mt-2">Quality basics and modern fits.</p>
        <Link href="/shop" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full">Shop Now</Link>
      </section>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products?.map(p => <ProductCard key={p.id} p={p}/>)}
        </div>
      </section>
    </div>
  )
}
