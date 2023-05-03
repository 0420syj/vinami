import type { NextPage } from "next";
import { useState, useEffect } from "react";
import MetaHead from "@/components/MetaHead";
import FoodSelect from "@/components/FoodSelect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home: NextPage = () => {
    const [selectedFood, setSelectedFood] = useState("");
    const [foodOptions, setFoodOptions] = useState<string[]>([]);

    useEffect(() => {
        fetch("https://port-0-vinami-backend-3zrm2algdlai1q.sel3.cloudtype.app/api/foods/all")
            .then(response => response.json())
            .then(data => setFoodOptions(data));
    }, []);

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
