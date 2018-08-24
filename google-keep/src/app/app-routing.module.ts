import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component'

const routes: Routes = [
  { path: 'get', component: GetComponent },
  { path: 'post', component: PostComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GetComponent, PostComponent]
