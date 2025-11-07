
'use client'
import { useState } from 'react'
export default function Checkout(){
  const [loading, setLoading] = useState(false)
  const submit = (e:any)=>{ e.preventDefault(); setLoading(true); setTimeout(()=>{ alert('Order placed via COD! (demo)'); setLoading(false) }, 800) }
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-semibold mb-4">Checkout (COD)</h1>
      <form onSubmit={submit} className="space-y-3">
        <input required placeholder="Full Name" className="w-full border rounded-lg p-3"/>
        <input required placeholder="Phone/WhatsApp" className="w-full border rounded-lg p-3"/>
        <input required placeholder="City" className="w-full border rounded-lg p-3"/>
        <textarea required placeholder="Address" className="w-full border rounded-lg p-3" rows={4}/>
        <button disabled={loading} className="bg-black text-white px-6 py-2 rounded-full">{loading ? 'Placing...' : 'Place COD Order'}</button>
      </form>
    </div>
  )
}
