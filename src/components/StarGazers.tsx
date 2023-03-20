import IconGithub from "./IconGithub"
import useSWR from "swr"

export interface GithubData {
    watchers: number
  }

async function githubApiFetcher(): Promise<GithubData> {
  const res = await fetch("https://api.github.com/repos/kodadot/nft-gallery");
  return await res.json();
}

export function useStargazers() {
    return useSWR<GithubData, Error>("watchers", githubApiFetcher);
  }

export default function StarGazers() {
    const { data, error } = useStargazers();

    const add = () => {
      const url = `https://github.com/kodadot/nft-gallery/`;
      window.open(url, '_blank')
    };
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }


    return (
        <div>
        <button
          onClick={add}
          className="flex items-center gap-2 border-2 border-gray-800 rounded-full px-5 py-1 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
        >
          <IconGithub />
          {data?.watchers ?? "0"}
        </button>
  
      </div>
    )
}