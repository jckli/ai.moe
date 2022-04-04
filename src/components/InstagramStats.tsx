import useSWR from "swr";
import { InstagramUser } from "../util/types";

export const InstagramStatsComponent = (props: any) => {
    const fetcher = async (url: string) => await fetch(url).then(res => res.json())
    const address = `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=`;
    const { data: info, error } = useSWR(address, fetcher);
    console.log(info);
    if (!info || error) {
        return (
            <div className="bg-pastel-dark-blue">Loading...</div>
        );
    }
    return (
        <div>
            <div>
                <h1>Followed by: {info}</h1>
                <h1>Following: {info}</h1>
            </div>
        </div>
    )
};