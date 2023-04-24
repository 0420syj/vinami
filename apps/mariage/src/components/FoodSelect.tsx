import React, { ChangeEvent } from "react";
import styles from "./FoodSelect.module.css";

interface FoodSelectProps {
    options: string[];
    selectedFood: string;
    onSelectFood: (food: string) => void;
}

const FoodSelect: React.FC<FoodSelectProps> = ({ options, selectedFood, onSelectFood }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onSelectFood(event.target.value);
    };

    return (
        <div className={styles.foodSelect}>
            <label htmlFor="food">Choose a food:</label>
            <select id="food" value={selectedFood} onChange={handleChange}>
                {options.map((food, index) => (
                    <option key={index} value={food}>
                        {food}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FoodSelect;
