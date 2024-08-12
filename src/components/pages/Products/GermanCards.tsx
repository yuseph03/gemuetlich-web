import ProductCard from "./ProductCard";
import German1 from "../../../assets/Menschen1.jpg"
import German2 from "../../../assets/Menschen2.jpg"
import German3 from "../../../assets/Menschen3.jpg"

const GermanCards : React.FC = () => {
return (
    <div className="product-card-container">
        <ProductCard
            title="🇩🇪 German I"
            level="Beginner Level"
            rate="$20/hr"
            imageUrl={German1}
        />
        <ProductCard
            title="🇩🇪 German II"
            level="Intermediate Level"
            rate="$25/hr"
            imageUrl={German2}
        />
        <ProductCard
            title="🇩🇪 German III"
            level="Advanced Level"
            rate="$30/hr"
            imageUrl={German3}
        />
    </div>
);
};

export default GermanCards;