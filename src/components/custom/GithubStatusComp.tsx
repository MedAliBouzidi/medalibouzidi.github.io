import Image from "next/image";

export const GithubStatusComp = () => {
    const baseUrl = "https://github-readme-stats-sigma-eight-43.vercel.app/api";
    const username = "MedAliBouzidi";
    const hide = "contribs,issues";
    const showIcons = true;
    const rankIcon = "github";
    const theme = "transparent";
    const githubStats = `${baseUrl}?username=${username}&hide=${hide}&show_icons=${showIcons}&rank_icon=${rankIcon}&theme=${theme}`;

    return (
        <div className="flex justify-center mt-24 lg:mt-0">
            <Image alt="stats" src={githubStats} width={600} height={300}/>
        </div>
    );
}
