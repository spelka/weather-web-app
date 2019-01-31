export interface Forecast
{
    location: string;
    summary: string;
    icon: string;
    precipProbability: number;
    temperatureHigh: number;
    temperatureLow: number;
    humidity: number;
}