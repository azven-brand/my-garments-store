type Props = {
  title: string;
  price: number;
  image?: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="border rounded-xl p-3 bg-white shadow-sm">
      <img
        src={image ?? 'https://via.placeholder.com/600x600?text=Product'}
        alt={title}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <div className="mt-2 font-semibold">{title}</div>
      <div className="text-sm text-gray-600">SAR {price}</div>
    </div>
  );
}
