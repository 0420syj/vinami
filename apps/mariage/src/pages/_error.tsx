interface ErrorProps {
    statusCode: number;
}

interface ErrorInitialProps {
    res: {
        statusCode: number;
    };
    err: {
        statusCode: number;
    };
}

function Error({ statusCode }: ErrorProps) {
    return <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>;
}

Error.getInitialProps = ({ res, err }: ErrorInitialProps) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
