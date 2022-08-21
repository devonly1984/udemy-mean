import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
class PostCreateComponent {
  enteredValue = ';';
  newPost = '';
  constructor() {}
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
export default PostCreateComponent;
