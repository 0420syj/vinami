import Counter from "../../components/counter";
import { NewButton } from "@vinami/ui";

function CounterPage() {
    return (
        <div>
            <h1>Counter Page</h1>
            <NewButton
                label="Button"
                onClick={() => {
                    console.log("clicked");
                }}
                primary
            />
            <Counter />
        </div>
    );
}

export default CounterPage;
