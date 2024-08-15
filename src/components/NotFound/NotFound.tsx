import "./index.scss";

function NotFound() {
    return (
        <div className="flex sm: justify-center items-center flex-col h-[100vh]">
            <section className="wrap__break_mobile flex">
                <div>
                    <div className="text-5xl text-center font-bold">404</div>
                    <div className="text-5xl font-bold">Not Found</div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;
