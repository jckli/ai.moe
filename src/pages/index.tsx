import type { NextPage } from "next";
import Image from "next/image";
import logo from "/public/favicon.png";
import { GitHubButton } from "../components/GitHubButton";

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-pastel-blue">
                <div className="flex flex-col items-center justify-center text-[#669db2] text-3xl font-semibold">
                    <div className="">
                        <div className="text-center">
                            <Image src={logo} width="200px" height="200px" alt="Logo" />
                        </div>
                        <h1 className="font-kgcs">hayasaka.moe</h1>
                    </div>
                    <GitHubButton />
                </div>
            </div>
        </>
    );
};

export default Home;
