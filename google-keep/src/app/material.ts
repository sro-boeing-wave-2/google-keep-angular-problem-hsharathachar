import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
    imports: [MatButtonModule, MatIconModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatCardModule],
    exports: [MatButtonModule, MatIconModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatCardModule],
})
export class MaterialModule {}