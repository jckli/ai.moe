import { useState } from "react";
import Carousel from "nuka-carousel";
import { getSauce } from "../util/sauce";

export const InstagramPost = (props: any) => {
    const [show, setShow] = useState(false)
    function toggle(){
        setShow(!show);
    }
    function forever(){
        setShow(true);
    }
    const sauce = getSauce(props.caption);
    if (!props.child) {
        return (
            <div className="mb-6">
                <div className="relative" onTouchStart={toggle} onMouseEnter={toggle} onMouseLeave={toggle}>
                    <img className="rounded-[20px]" draggable="false" src={props.link} alt={`Image ${props.key}`}/>
                    <div className="info" style={{opacity: show?"1":"0"}}>
                        <div className="n-post-fade absolute bottom-0 w-full pb-4 px-4 pt-6 rounded-br-[20px] rounded-bl-[20px]">
                            <h1 className="font-kgcs text-white text-sm cursor-default leading-tight">{sauce}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="mb-6">
                <div className="relative" onTouchStart={toggle} onMouseEnter={toggle} onMouseLeave={toggle}>
                    <Carousel
                        defaultControlsConfig={{nextButtonClassName:"hidden", prevButtonClassName:"hidden"}}
                        disableEdgeSwiping={true}
                    >
                        {props.child.data.map((c: any) => (
                            <img className="rounded-[20px]" key={c.id} draggable="false" src={c.media_url} alt={`Image ${c.id}`}/>
                        ))}
                    </Carousel>
                    <div className="info" style={{opacity: show?"1":"0"}}>
                        <div className="c-post-fade absolute top-0 w-full pb-4 px-4 pt-4 rounded-tr-[20px] rounded-tl-[20px]">
                            <h1 className="font-kgcs text-white text-sm cursor-default leading-normal">{sauce}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};