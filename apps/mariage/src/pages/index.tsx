import type { NextPage } from "next";
import { useState, useEffect } from "react";
import MetaHead from "@/components/MetaHead";
import FoodSelect from "@/components/FoodSelect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@vinami/ui";

const Home: NextPage = () => {
    const [selectedFood, setSelectedFood] = useState("");
    const [foodOptions, setFoodOptions] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://port-0-vinami-backend-3zrm2algdlai1q.sel3.cloudtype.app/api/foods/all")
            .then(response => response.json())
            .then(data => {
                setFoodOptions(data);
                setSelectedFood(data[0]);
                setLoading(false);
            });
    }, []);

    const getFoodName = async () => {
        fetch(`https://port-0-vinami-backend-3zrm2algdlai1q.sel3.cloudtype.app/api/foods/name?name=${selectedFood}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => console.log(data))
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <>
            <MetaHead />
            <Header />
            <main>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FoodSelect
                            options={foodOptions}
                            selectedFood={selectedFood}
                            onSelectFood={food => setSelectedFood(food)}
                        />
                        <Button backgroundColor="#5F021F" label="Get FoodName" onClick={getFoodName} primary />
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default Home;
