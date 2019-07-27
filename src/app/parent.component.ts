import { Component } from '@angular/core';

@Component({
	selector: 'parent-component',
	templateUrl: 'parent.component.html'
})

export class ParentComponent {
	title = "Parent Component";

	parentCounter: number = 1;
	selectedDeveloper: any;

	developers: any = [
		{ name: "John", skill: "Java", salary: 60000},
		{ name: "Mark", skill: ".Net", salary: 55000},
		{ name: "Sue", skill: "Android", salary: 70000}
	];

	updateMySkill(event) {
		this.selectedDeveloper = event;
	}

	select(_developer) {
		this.selectedDeveloper = _developer;
	}

	updateInPrent(event) {
		console.log("Parent component ", event);
		this.parentCounter = event;
	}

}