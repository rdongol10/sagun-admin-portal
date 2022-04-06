import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {TransactionService} from '../transaction/service/transaction.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
    startClosingBalanceAmount = 0;
    endClosingBalanceAmount = 0;
    currentBalance = 0;
    overallGrowth = 0;
    public lineChartData: ChartDataSets[] = [
        {data: [], label: 'Closing Date vs Amount'},
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions = {
        responsive: true,
        legend: {
            display: false
        }
    };
    public lineChartColors: Color[] = [
        {
            borderColor: 'rgb(75, 192, 192)',
            pointBorderWidth: 3,
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [];

    constructor(private service: TransactionService) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.service.last30DaysTransaction()
            .subscribe(data => {
                const arrayData = data.data.map(dat => dat.amount);
                this.currentBalance = arrayData[0];
                this.startClosingBalanceAmount = arrayData[0];
                this.endClosingBalanceAmount = arrayData[arrayData.length - 1];
                this.overallGrowth = this.endClosingBalanceAmount - this.startClosingBalanceAmount;
                this.lineChartData = [{data: arrayData, borderColor: 'rgb(75, 192, 192)', lineTension: 0.1, fill: false}];
                this.lineChartLabels = data.data.map(dat => this.formattedDate(new Date(dat.closingDate)));

            });
    }

    ngOnChange() {
        this.getData();
    }

    formattedDate(date): string {

        if (date) {
            const datePart = date.getDate();
            const monthPart = date.getMonth() + 1;
            const yearPart = date.year;

            return (monthPart < 10 ? '0' + monthPart : monthPart) + '-' + (datePart < 10 ? '0' + datePart : datePart);
            // return date;
        }
    }
}
