export interface Joke {
    // categories: string[] // todo: fix later, not sure what the api returns
    created_at: Date;
    icon_url: string;
    id: string;
    updated_at: Date;
    url: string;
    value: string;
}