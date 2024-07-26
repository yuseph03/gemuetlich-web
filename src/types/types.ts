export interface BlogPost {
    _id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    link?: string;
    imageUrl?: string;
}

export interface BlogContextType {
    posts: BlogPost[];
    loading: boolean;
}

