import MetaData from "../Layouts/MetaData/MetaData"
import HeroSlider from "./HeroSlider";
import ProductCard from "./ProductCard";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import FeaturedSlider from "./FeatureSlider";
import "./Home.css";
import { useEffect } from "react";

function Home() {
    // const alert = useAlert();

    const dispatch = useDispatch();
    const {
        // loading,
        error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            // alert.error(error);
            dispatch(clearErrors);
        }
        dispatch(getProduct());
    }, [dispatch, error,
        // alert
    ]);

    return (
        <>
            <MetaData title="Atrangi" />
            <div className="Home_Page">
                <div className="heroSlider_Home">
                    <HeroSlider />
                </div>

                <div className="feature" style={{
                    marginTop: "2.7rem",
                    marginBottom: "2.7rem",
                }}>
                    <h2
                        style={{
                            textAlign: "center",
                            fontFamily: `"Archivo", sans-serif`,
                            fontWeight: "800",
                            marginBottom:"2.7rem"
                        }}
                    >
                        Featured Products
                    </h2>

                    {products &&
                        <FeaturedSlider products={products} />}

                </div>

                <h2 className="trending_heading">Trending Products</h2>

                <div className="trending-products">
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                </div>
            </div>

        </>
    )
}

export default Home;