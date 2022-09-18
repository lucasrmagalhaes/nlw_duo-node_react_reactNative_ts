export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined; //não precisa de param
            game: GameParams;
        }
    }
}