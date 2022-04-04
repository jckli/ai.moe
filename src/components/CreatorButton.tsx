import { motion } from "framer-motion";

export const CreatorButton = (props: any) => {
    return (
        <motion.a
            href={`https://www.instagram.com/${props.username}`}
            target="_blank"
            className="px-6 py-2 mx-2 w-[180px] inline-block bg-pastel-green text-pastel-dark-green text-lg font-normal items-center justify-center rounded-md mt-2 border-solid border-pastel-mint-green border-2"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
        >
            <h1 className="font-kgcs text-base">@{props.username}</h1>
        </motion.a>
    );
};
