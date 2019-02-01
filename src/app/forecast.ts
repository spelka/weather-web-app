export interface Forecast
{
    location: string;
    date: number;
    month: number;
    year: number;
    summary: string;
    icon: string;
    precipProbability: number;
    temperature: number;
    temperatureHigh: number;
    temperatureLow: number;
    humidity: number;

    day1_date: number;
    day1_month: number;
    day1_icon: string;
    day1_temperatureHigh: number;
    day1_temperatureLow: number;

    day2_date: number;
    day2_month: number;
    day2_icon: string;
    day2_temperatureHigh: number;
    day2_temperatureLow: number;

    day3_date: number;
    day3_month: number;
    day3_icon: string;
    day3_temperatureHigh: number;
    day3_temperatureLow: number;

    day4_date: number;
    day4_month: number;
    day4_icon: string;
    day4_temperatureHigh: number;
    day4_temperatureLow: number;

    day5_date: number;
    day5_month: number;
    day5_icon: string;
    day5_temperatureHigh: number;
    day5_temperatureLow: number;

}