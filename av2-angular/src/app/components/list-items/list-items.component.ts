import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  items: { text: string; completed: boolean }[] = [
    { text: 'Item 1', completed: false },
    { text: 'Item 2', completed: false },
    { text: 'Item 3', completed: false },
    { text: 'Item 4', completed: false }
  ];

  newItemText: string = '';

  addTask() {
    if (this.newItemText && this.newItemText.length <= 100) {
      this.items.push({ text: this.newItemText, completed: false });
      this.newItemText = '';
    }
  }

  removeTask(index: number) {
    this.items.splice(index, 1);
  }

  completeTask(index: number) {
    this.items[index].completed = true;
  }
}
