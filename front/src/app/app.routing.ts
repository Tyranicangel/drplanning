import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

export const routes:Routes=[
	{path:'workspace',loadChildren:'app/workspace/workspace.module#WorkspaceModule'}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRouting{}