import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkFilledModule } from "@carbon/icons-angular";

import { StructuredList } from "./structured-list.component";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ListColumn } from "./list-column.component";

@NgModule({
	declarations: [
		StructuredList,
		ListRow,
		ListHeader,
		ListColumn
	],
	exports: [
		StructuredList,
		ListRow,
		ListHeader,
		ListColumn
	],
	imports: [
		CommonModule,
		CheckmarkFilledModule
	]
})
export class StructuredListModule { }
