import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'child-component',
	templateUrl: 'child.component.html'
})

export class ChildComponent {

	@Input()
	counter: number;

	skill: string;

	@Input()
	selectedDeveloper: any;

	@Output()
	changeSkill: EventEmitter<any>;

	@Output()
	update: EventEmitter<number>;

	title = "Child Component";

	constructor() {
		this.update = new EventEmitter();
		this.changeSkill = new EventEmitter();
	}

	updateSkill() {
		this.selectedDeveloper.skill = this.skill;
		console.log(this.selectedDeveloper);

		this.changeSkill.emit(this.selectedDeveloper);
	}

	updateCounterInChild() {
		this.counter = this.counter + 1;
		console.log("Counter value is: ",this.counter);

		this.update.emit(this.counter); //trigger an event from child
	}
}