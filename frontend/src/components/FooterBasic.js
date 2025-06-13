import "@/components/footer-basic.module.css";

function FooterBasic() {
    return (
        <div className="footer-basic-container ">
            <div className="flex flex-col justify-center text-start items-center">
                
                <h1 className="font-bold text-xl pb-2">
                    You are carbon neutral!
                </h1>

                <div className="flex flex-row gap-3 justify-center items-center">
                    <h1 className=" text-md leading-tight">
                        You have offset 100% of your footprint this month
                    </h1>
                    <button className="footer-basic-button-01 text-md active-scale">
                        Share
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default FooterBasic;
