import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrizeWindowDialog } from '../prize-window/prize-window.component';

@Component({
  selector: 'jawbreaker-component',
  templateUrl: './jawbreaker.component.html',
  styleUrls: ['./jawbreaker.component.css']
})



export class JawbreakerComponent {
  title = 'breaker';
  clickCount: number = 0;
  NEEDED_CLICKS: number = 1;
  RARITY_LEVEL: string = "COMMON";
  loadingNewJawbreaker: boolean = false;

  imageSource: string = "../assets/JawbreakerCOMMON.png";
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

  constructor(public dialog: MatDialog) {}

  async openDialog() {
    let currentPrize = this.getPrize();
    const dialogRef = this.dialog.open(PrizeWindowDialog, {data: {
      prizeName: currentPrize.name,
      prizeImage: currentPrize.image
    }});
    await dialogRef.afterClosed().toPromise();
  }

  getPrize() {
    if (this.RARITY_LEVEL == "COMMON") {
      return this.getCommonPrize();
    }
    if (this.RARITY_LEVEL == "UNCOMMON") {
      return this.getUncommonPrize();
    }
    if (this.RARITY_LEVEL == "RARE") {
      return this.getRarePrize();
    }
    if (this.RARITY_LEVEL == "ULTRA RARE") {
      return this.getUltraRarePrize();
    }
    if (this.RARITY_LEVEL == "SUPER ULTRA RARE") {
      return this.getSuperUltraRarePrize();
    }
    return {name: "Developers Sticker", image: "../assets/JawbreakerCOMMON.png"};
  }

  getCommonPrize() {
    return {name: "Common Prize", image: "../assets/JawbreakerCOMMON.png"};
  }

  getUncommonPrize() {
    return {name: "Uncommon Prize", image: "../assets/JawbreakerCOMMON.png"};
  }

  getRarePrize() {
    return {name: "Rare Prize", image: "../assets/JawbreakerCOMMON.png"};
  }

  getUltraRarePrize() {
    return {name: "Ultra Rare Prize", image: "../assets/JawbreakerCOMMON.png"};
  }

  getSuperUltraRarePrize() {
    return {name: "Ultra Super Rare Prize", image: "../assets/JawbreakerCOMMON.png"};
  }

  public ngOnInit() {
    this.clickCount = 0;
    this.NEEDED_CLICKS = this.getNeededClicks();
    this.RARITY_LEVEL = this.getRarityRanking();
    this.imageSource = "../assets/Jawbreaker" + this.RARITY_LEVEL + ".png";
  }


  public getNextRarity(rarity: string) {
      if (rarity == "COMMON") return "UNCOMMON";
      if (rarity == "UNCOMMON") return "RARE"
      if (rarity == "RARE") return "ULTRA RARE"
      if (rarity == "ULTRA RARE") return "SUPER ULTRA RARE"
      if (rarity == "SUPER ULTRA RARE") return "COMMON"
      return "RARE"
  }

  public getRarityRanking() {
    let randomNumber = Math.random() * 100 | 0;
    if (randomNumber < 50) {
      return "COMMON";
    } else if (randomNumber < 75) {
      return "UNCOMMON";
    }else if (randomNumber < 89) {
      return "RARE";
    }else if (randomNumber < 97) {
      return "ULTRA RARE";
    }else {
      return "SUPER ULTRA RARE";
    }
  }

  public getNeededClicks() {
    return 1;
    //TODO check for clicker power ups
  }

  public nextColor(): string {
      let randomNumber = Math.random() * 100 | 0;
      if (randomNumber < 10) {
        return this.jaw2;
      } else if (randomNumber < 15) {
        return this.jaw3;
      } else if (randomNumber < 19) {
        return this.jaw4;
      } else if (randomNumber < 28) {
        return this.jaw5;
      } else if (randomNumber < 35) {
        return this.jaw6;
      } else if (randomNumber < 45) {
        return this.jaw7;
      } else if (randomNumber < 51) {
        return this.jaw8;
      } else if (randomNumber < 55) {
        return this.jaw9;
      } else if (randomNumber < 66) {
        return this.jaw91;
      } else if (randomNumber < 71) {
        return this.jaw92;
      } else if (randomNumber < 83) {
        return this.jaw93;
      } else if (randomNumber < 90) {
        return this.jaw94;
      } else if (randomNumber < 101) {
        return this.jaw95;
      } else {
        return "../assets/Jawbreaker1.png";
      }
  }

  public async finishBreaking() {
    await this.openDialog();
    this.newRarityAnimation();
    this.RARITY_LEVEL = this.getRarityRanking();
    this.imageSource = "../assets/Jawbreaker" + this.RARITY_LEVEL + ".png";
    this.imageWidth = 525;
  }

  public async newRarityAnimation() {
    this.loadingNewJawbreaker = true;
    const info = document.getElementById("newRarityInfo")
    const clicks = document.getElementById("clicksDeclaration");
    const rarity = document.getElementById('rarityDeclaration');
    const prize = document.getElementById("prizeDeclaration");
    const candy = document.getElementById("prizeDeclaration");
    const toggle = document.getElementById("rarityToggle");
    if (toggle != null) toggle.style.display = "block";
    if (info != null) info.style.display = "block";
    if (clicks != null) clicks.style.display = "none";
    if (rarity != null) rarity.style.display = "none";
    if (prize != null) prize.style.display = "none";

    for (let i = 0; i < 15; i++) {
      this.RARITY_LEVEL = this.getNextRarity(this.RARITY_LEVEL);
      this.imageSource = "../assets/Jawbreaker" + this.RARITY_LEVEL + ".png";
      await new Promise(f => setTimeout(f, 200));
    }

    this.RARITY_LEVEL = this.getRarityRanking();
    this.imageSource = "../assets/Jawbreaker" + this.RARITY_LEVEL + ".png";

    if (toggle != null) toggle.style.display = "none";
    if (info != null) info.style.display = "none";
    if (clicks != null) clicks.style.display = "block";
    if (rarity != null) rarity.style.display = "block";
    if (prize != null) prize.style.display = "block";
    this.loadingNewJawbreaker = false;

  }

  public addClick() {
    if (this.loadingNewJawbreaker) return;
    this.clickCount++;
    if (this.clickCount >= this.NEEDED_CLICKS) {
      //this.imageSource = this.jaw2;
      this.imageWidth *= .9;
      this.imageSource = this.nextColor();
      this.clickCount = 0;
    }
    if (this.imageWidth < 80) {
      this.finishBreaking();
    }
  }
}
