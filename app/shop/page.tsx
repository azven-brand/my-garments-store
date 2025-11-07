import ProductCard from '../../components/ProductCard';

type Item = { id: number | string; title: string; price: number; image?: string };

const products: Item[] = [
  { id: 1, title: 'Premium T-Shirt (Black)', price: 49, image: 'https://via.placeholder.com/600x600?text=T-Shirt' },
  { id: 2, title: 'Hoodie',                    price: 129, image: 'https://via.placeholder.com/600x600?text=Hoodie' },
  { id: 3, title: 'Jeans',                     price: 99,  image: 'https://via.placeholder.com/600x600?text=Jeans' },
  { id: 4, title: 'Polo Shirt',                price: 59,  image: 'https://via.placeholder.com/600x600?text=Polo' },
];

export default function ShopPage() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(p => (
          <ProductCard
            key={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}
