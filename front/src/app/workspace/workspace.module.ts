import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRouting } from './workspace.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrgoalsComponent } from './drgoals/drgoals.component';
import { DrstrategyComponent } from './drstrategy/drstrategy.component';
import { PreventiveComponent } from './preventive/preventive.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { VendorComponent } from './vendor/vendor.component';
import { InfraComponent } from './infra/infra.component';
import { BiaComponent } from './bia/bia.component';
import { TestlogComponent } from './testlog/testlog.component';
import { BackupComponent } from './backup/backup.component';
import { TriggerComponent } from './trigger/trigger.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRouting
  ],
  declarations: [WorkspaceComponent, DashboardComponent, DrgoalsComponent, DrstrategyComponent, PreventiveComponent, StakeholderComponent, VendorComponent, InfraComponent, BiaComponent, TestlogComponent, BackupComponent, TriggerComponent]
})
export class WorkspaceModule { }
