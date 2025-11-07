
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
export default function Admin(){
  const [auth, setAuth] = useState(false)
  const [form, setForm] = useState<any>({ title:'', slug:'', price:0, description:'', category:'Men', images:[], is_active:true, stock:10 })
  useEffect(()=>{
    const pass = prompt('Enter ADMIN password')
    if(pass === process.env.NEXT_PUBLIC_ADMIN_PASS || pass === process.env.ADMIN_PASS){ setAuth(true) } else { alert('Wrong password') }
  }, [])
  const save = async ()=>{
    const { error } = await supabase.from('products').insert({ ...form })
    if(error){ alert(error.message) } else { alert('Saved!') }
  }
  if(!auth) return null
  return (
    <div className="max-w-2xl space-y-3">
      <h1 className="text-2xl font-semibold">Add Product</h1>
      <input placeholder="Title" className="w-full border p-3 rounded" onChange={e=>setForm({...form, title:e.target.value})}/>
      <input placeholder="Slug (unique)" className="w-full border p-3 rounded" onChange={e=>setForm({...form, slug:e.target.value})}/>
      <input type="number" placeholder="Price" className="w-full border p-3 rounded" onChange={e=>setForm({...form, price:Number(e.target.value)})}/>
      <input placeholder="Image URL" className="w-full border p-3 rounded" onChange={e=>setForm({...form, images:[e.target.value]})}/>
      <textarea placeholder="Description" className="w-full border p-3 rounded" onChange={e=>setForm({...form, description:e.target.value})}/>
      <button onClick={save} className="bg-black text-white px-6 py-2 rounded-full">Save</button>
      <p className="text-xs text-gray-500">*Demo admin. Replace with proper auth later.</p>
    </div>
  )
}
