import { Component } from '@angular/core';

@Component({
  selector: 'jawbreaker-component',
  templateUrl: './jawbreaker.component.html',
  styleUrls: ['./jawbreaker.component.css']
})



export class JawbreakerComponent {
  title = 'breaker';
  clickCount: number = 0;
  NEEDED_CLICKS: number = 1;


  imageSource: string = "../assets/Jawbreaker1.png";
  imageWidth: number = 525;
  jaw2: string = "../assets/Jawbreaker2.png";
  jaw3: string = "../assets/Jawbreaker3.png";
  jaw4: string = "../assets/Jawbreaker4.png";
  jaw5: string = "../assets/Jawbreaker5.png";
  jaw6: string = "../assets/Jawbreaker6.png";
  jaw7: string = "../assets/Jawbreaker7.png";
  jaw8: string = "../assets/Jawbreaker8.png";
  jaw9: string = "../assets/Jawbreaker9.png";
  jaw91: string = "../assets/Jawbreaker91.png";
  jaw92: string = "../assets/Jawbreaker92.png";
  jaw93: string = "../assets/Jawbreaker93.png";
  jaw94: string = "../assets/Jawbreaker94.png";
  jaw95: string = "../assets/Jawbreaker95.png";

  public ngOnInit() {
    this.clickCount = 0;
    this.NEEDED_CLICKS = this.getNeededClicks();

  }

  public getRarityRanking() {

  }

  public getNeededClicks() {
    return 1;
    //TODO check for clicker power ups
  }

  public nextColor(): string {
      let randomNumber = Math.random() * 100 | 0;
      if (randomNumber > -1 && randomNumber < 10) {
        return this.jaw2;
      } else if (randomNumber > 10 && randomNumber < 15) {
        return this.jaw3;
      }else if (randomNumber > 15 && randomNumber < 19) {
        return this.jaw4;
      }else if (randomNumber > 19 && randomNumber < 28) {
        return this.jaw5;
      }else if (randomNumber > 28 && randomNumber < 35) {
        return this.jaw6;
      }else if (randomNumber > 35 && randomNumber < 45) {
        return this.jaw7;
      }else if (randomNumber > 45 && randomNumber < 51) {
        return this.jaw8;
      }else if (randomNumber > 51 && randomNumber < 55) {
        return this.jaw9;
      }else if (randomNumber > 55 && randomNumber < 66) {
        return this.jaw91;
      }else if (randomNumber > 66 && randomNumber < 71) {
        return this.jaw92;
      }else if (randomNumber > 71 && randomNumber < 83) {
        return this.jaw93;
      }else if (randomNumber > 83 && randomNumber < 90) {
        return this.jaw94;
      }else if (randomNumber > 90 && randomNumber < 100) {
        return this.jaw95;
      } else {
        return "../assets/Jawbreaker1.png";
      }
  }

  public finishBreaking() {
    this.imageSource = "../assets/Jawbreaker1.png";
    this.imageWidth = 525;
  }

  public addClick() {
    this.clickCount++;
    if (this.clickCount > this.NEEDED_CLICKS) {
      //this.imageSource = this.jaw2;
      this.imageWidth -= 50;
      this.imageSource = this.nextColor();
      this.clickCount = 0;
    }
    if (this.imageWidth < 50) {
      this.finishBreaking();
    }
  }
}
