import { DependencyList } from "react";
export interface AsyncEffectStatus {
    active: boolean;
    cleanup?: () => void;
}
export declare function useAsyncEffect(effect: (status: AsyncEffectStatus) => Promise<any>, deps?: DependencyList): void;
