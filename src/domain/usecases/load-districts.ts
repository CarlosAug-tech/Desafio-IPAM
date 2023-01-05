export interface ILoadDistricts {
    getDistricts(city: string): Promise<any[]>;
}
