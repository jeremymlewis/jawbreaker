import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// @Component({
//   selector: 'prize-window',
//   templateUrl: 'prize-window.component.html',
//   styleUrls: ['prize-window.component.css'],
// })
// export class PrizeWindowComponent {
//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     const dialogRef = this.dialog.open(PrizeWindowDialog);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }
// }

@Component({
  selector: 'prize-window-dialog',
  templateUrl: 'prize-window-dialog.component.html',
})
export class PrizeWindowDialog {
  constructor(
    public dialogRef: MatDialogRef<PrizeWindowDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {prizeName: string, prizeImage: string}
  )
  {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
