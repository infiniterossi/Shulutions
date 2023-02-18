export interface GitHubStats {
    languages?: string[];
    contributors?: Contributor[];
};

export interface Contributor {
    login?: string;
    avatar_url?: string;
    html_url?: string;
    contributions?: number;
}