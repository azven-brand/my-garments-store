
import Image from 'next/image'
import { supabase } from '../../../lib/supabaseClient'
import Link from 'next/link'
export default async function Product({ params }: { params: { slug: string } }){
  const { data: product } = await supabase.from('products').select('*').eq('slug', params.slug).single()
  if(!product) return <div>Product not found.</div>
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl overflow-hidden bg-gray-50 relative aspect-square">
        {product.images?.[0] && <Image src={product.images[0]} alt={product.title} fill className="object-cover" />}
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-gray-500">{product.category}</p>
        <div className="mt-2 text-2xl font-bold">{product.sale_price ?? product.price} SAR</div>
        <p className="mt-4 text-sm">{product.description}</p>
        <Link href="/cart" className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-full">Add to Cart</Link>
      </div>
    </div>
  )
}
