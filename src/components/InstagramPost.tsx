import Image from "next/image";

export const InstagramPost = (props: any) => {
    return (
        <div className="mb-6">
            <img className="rounded-[20px]" draggable="false" src={props.link} alt={`Image ${props.key}`}/>
        </div>
    );
};