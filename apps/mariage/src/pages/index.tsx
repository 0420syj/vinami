import type { NextPage } from "next";
import { useState } from "react";
import MetaHead from "@/components/MetaHead";
import FoodSelect from "@/components/FoodSelect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home: NextPage = () => {
    const [selectedFood, setSelectedFood] = useState("");
    const foodOptions = ["Pizza", "Pasta", "Steak", "Seafood", "Salad"];

    return (
        <>
            <MetaHead />
            <Header />
            <main>
                <FoodSelect
                    options={foodOptions}
                    selectedFood={selectedFood}
                    onSelectFood={food => setSelectedFood(food)}
                />
            </main>
            <Footer />
        </>
    );
};

export default Home;
