// honestly this component is so useless but for some reason if you use useSWR with dangerouslysetinnerhtml the html will not load and im too lazy to fix that

import useSWR from "swr";
import Masonry from "react-masonry-css";
import { Posts, Post } from "../util/types";
import { InstagramPost } from "../components/InstagramPost";

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};

export const InstagramPosts = (props: any) => {
    const fetcher = url => fetch(url).then(r => r.json());
    const { data: info, error } = useSWR<Posts>("/api/instagram/posts", fetcher);
    if (!info || error) {
        return (
            <div className="font-kgcs text-pastel-dark-pink">Loading...</div>
        );
    }
    return (
        <div className="p-[20px] mb-[-1.5rem]">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto smd:ml-[-1.5rem]"
                columnClassName="smd:pl-6"
            >
                {info.data.map((post: Post) => (
                    <InstagramPost link={post.media_url} key={post.id} />
                ))}
            </Masonry>
        </div>
    );
};