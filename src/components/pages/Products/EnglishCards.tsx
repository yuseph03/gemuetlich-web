import ProductCard from "./ProductCard";

const EnglishCards : React.FC = () => {
return (
    <div className="product-card-container">
        <ProductCard
            title="🇺🇸 English I"
            level="Beginner Level"
            rate="$20/hr"
            imageUrl="#"
        />
        <ProductCard
            title="🇺🇸 English II"
            level="Intermediate Level"
            rate="$25/hr"
            imageUrl="#"
        />
        <ProductCard
            title="🇺🇸 English III"
            level="Advanced Level"
            rate="$30/hr"
            imageUrl="#"
        />
    </div>
);
};

export default EnglishCards;