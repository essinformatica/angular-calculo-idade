import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css'],
})
export class CalculoComponent implements OnInit {
  calcular() {
    const today = new Date();
    const selectedDate = document.querySelector<HTMLInputElement>('#nascimento')
      .value;
    const yearToday = today.getFullYear();
    const MonthToday = today.getMonth() + 1;
    const DayToday = today.getDate();
    const arrSelectedDate = selectedDate.split('-');
    const yearSelected = arrSelectedDate[0];
    const monthSelected = arrSelectedDate[1];
    const daySelected = arrSelectedDate[1];

    const numberMonthSelected = (monthSelected as unknown) as number;
    const numberDaySelected = (daySelected as unknown) as number;

    const numberYearSelected = (yearSelected as unknown) as number;
    let calc = yearToday - numberYearSelected;
    if (
      MonthToday < numberMonthSelected ||
      (MonthToday == numberMonthSelected && DayToday < numberDaySelected)
    ) {
      calc--;
    }

    document.querySelector<HTMLInputElement>('#resultado').value =
      calc.toString() + ' ano(s)';
  }
  constructor() {}

  ngOnInit(): void {}
}
