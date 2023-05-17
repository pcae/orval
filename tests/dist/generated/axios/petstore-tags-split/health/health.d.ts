import type { AxiosResponse } from 'axios';
export declare const getHealth: () => {
    healthCheck: <TData = AxiosResponse<string>>(version?: number, options?: any) => Promise<TData>;
};
export declare type HealthCheckResult = AxiosResponse<string>;
//# sourceMappingURL=health.d.ts.map