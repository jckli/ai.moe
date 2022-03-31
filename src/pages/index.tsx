import type { NextPage } from "next";
import Image from "next/image";
import logo from "/public/favicon.png";
import { GitHubButton } from "../components/GitHubButton";
import { InstagramStatsComponent } from "../components/InstagramStats";

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-pastel-blue">
                <div className="py-20 flex flex-col items-center justify-center text-pastel-dark-blue text-3xl font-semibold">
                    <div className="">
                        <div className="text-center">
                            <Image draggable="false" src={logo} width="200px" height="200px" alt="Logo" />
                        </div>
                        <h1 className="font-kgcs">hayasaka.moe</h1>
                    </div>
                    <GitHubButton />
                    <InstagramStatsComponent />
                </div>
            </div>
        </>
    );
};

export default Home;
