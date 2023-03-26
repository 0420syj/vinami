import { useRouter } from "next/router";

const Wine = () => {
    const router = useRouter();
    const { wine } = router.query;

    return <p>Wine : {wine}</p>;
};

export default Wine;
