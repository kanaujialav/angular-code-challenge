import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TrendingStockService {
    private url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers";
    constructor(private http: HttpClient) { }

    getTrendingTickers() {
        return this.http.get<any>(this.url);
    }

    
}