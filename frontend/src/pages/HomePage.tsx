import land from "../assets/landing.png";
import appd from "../assets/appDownload.png";

const HomePage= ()=> {
    return(
        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Welcome to CaféFlow
                </h1>
                <span className="text-xl">A online hub to discover our artisanal coffee, delectable eats</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={land} alt="" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                    With Cafeflow, customers can enjoy faster billing, reduced waiting time, and personalized ordering
                    </span>
                    <span>
                        Download our app
                    </span>
                    <img src={appd} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;