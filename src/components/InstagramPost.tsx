import { useState, useEffect } from "react";
import Carousel from "nuka-carousel";

export const InstagramPost = (props: any) => {
    const [renderKey, setKey] = useState(0);
    useEffect(() => {
        setKey(Date.now());
    }, []);
    if (!props.child) {
        return (
            <div className="mb-6">
                <img className="rounded-[20px]" draggable="false" src={props.link} alt={`Image ${props.key}`}/>
            </div>
        );
    } else {
        return (
            <div className="mb-6">
                <Carousel
                    defaultControlsConfig={{nextButtonClassName:"hidden", prevButtonClassName:"hidden"}}
                >
                    {props.child.data.map((c: any) => (
                        <img className="rounded-[20px]" draggable="false" src={c.media_url} key={c.id} alt={`Image ${c.id}`}/>
                    ))}
                </Carousel>
            </div>
        );
    }
};