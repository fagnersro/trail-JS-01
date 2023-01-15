class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector('#display');
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');

    this._currentDate;
    this.initialize();
  }

  initialize() {
    this._dateEl.innerHTML = '09/02/1995';
    this._timeEl.innerHTML = '23:42';
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }
  set displayCalc(valor) {
    this._displayCalcEl.innerHTML = valor;
  }

  get currentDate() {
    return new Date();
  }
  set currentDate(data) {
    this._currentDate = data;
  }
}
