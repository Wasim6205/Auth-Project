import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        {/* Category */}
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">
            Add to Cart
          </button>

          <button className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;