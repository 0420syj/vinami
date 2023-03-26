import { useRouter } from "next/router";

const Food = () => {
    const router = useRouter();
    const { food } = router.query;

    return <p>Food : {food}</p>;
};

export default Food;
