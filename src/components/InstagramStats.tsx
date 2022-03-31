import useSWR from "swr";
import { InstagramUser } from "../util/types";
import { information } from "../info";
import axios from "axios";

export const InstagramStatsComponent = (props: any) => {
    const address = `https://www.instagram.com/${information.instagram_username}/channel/?__a=1`;
    const fetcher = (url) => fetch(url).then((res) => res.json());
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
                <h1>Followed by: {info.graphql.user.edge_followed_by.count}</h1>
                <h1>Following: {info.graphql.user.edge_follow.count}</h1>
            </div>
        </div>
    )
};