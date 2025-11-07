import ProductCard from '../../components/ProductCard';

type Item = { id: number | string; title: string; price: number; image?: string };

const products: Item[] = [
  { id: 1, title: 'T-Shirt (Black)', price: 49, image: 'https://via.placeholder.com/600x600?text=T-Shirt' },
  { id: 2, title: 'Hoodie',        price: 129, image: 'https://via.placeholder.com/600x600?text=Hoodie'  },
  { id: 3, title: 'Jeans',         price: 99,  image: 'https://via.placeholder.com/600x600?text=Jeans'   },
];

export default function ShopPage() {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-semibold">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {products.map((p) => (
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
