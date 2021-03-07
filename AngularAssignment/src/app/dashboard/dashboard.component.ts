import { Component, OnInit, AfterViewInit,ViewChild} from '@angular/core';
import { TrendingStockService } from '../services';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from '../models';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit{

  loading: boolean = true;
  tableDataSource = new MatTableDataSource();
  tableData: any =[];
  searchValue: string;
  displayedColumns: string[] = ['name','symbol','exchangeName','sourceName','market','region'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private trendingStockService : TrendingStockService ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    /** 
     * renders data in html, so subscribed in AfterViewInit
     * @event capture resolved data event 
     */
    this.trendingStockService.getTrendingTickers().subscribe(data => {
      this.loading = false;
      console.log(data);
      data.finance.result[0].quotes.forEach((stock,index) => {
        let name = stock.longName;
        let symbol = stock.symbol;
        let exchangeName = stock.fullExchangeName;
        let sourceName = stock.quoteSourceName;
        let market = stock.market;
        let region = stock.region
        let obj = new Stock(index,name ? name : '--N/A--',symbol ? symbol : '--N/A--',exchangeName ? exchangeName : '--N/A--',sourceName ? sourceName : '--N/A--',market ? market: '--N/A',region? region : '--N/A--')
        this.tableData.push(obj);
      })
      this.initTable(this.tableData)
    });
  }

  public applyFilter = (e) => {
    this.searchValue = e.target.value;
    this.tableDataSource.filter = this.searchValue.trim().toLocaleLowerCase();
  }

  initTable(tableData){
    this.tableDataSource = new MatTableDataSource(tableData);
    this.tableDataSource.filterPredicate = function(data: any, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.symbol.toLowerCase().includes(filter);
    };
    this.tableDataSource.paginator = this.paginator;
  }

}
