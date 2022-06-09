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
  NEEDED_CLICKS: number = 5;
  RARITY_LEVEL: string = "COMMON";
  loadingNewJawbreaker: boolean = false;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  CANDY_SIZE: number = 525;

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



  public ngOnInit() {
    this.clickCount = 0;
    this.CANDY_SIZE = 525;
    if ((.6 * this.height) < this.CANDY_SIZE) {
      this.CANDY_SIZE = Math.floor(this.height * .6)
    }
    if (this.width < this.CANDY_SIZE) {
      this.CANDY_SIZE = Math.floor(this.width * .9)
    }
    this.NEEDED_CLICKS = this.getNeededClicks();
    this.RARITY_LEVEL = this.getRarityRanking();
    this.imageSource = "../assets/Jawbreaker" + this.RARITY_LEVEL + ".png";
    this.imageWidth = this.CANDY_SIZE;
  }


  async openDialog() {
    let currentPrize = this.getPrize();
    let prizeMessage = "";
    let newClickValue = 5;
    if (currentPrize.name == "Toothpick") {
      newClickValue = 4;
      prizeMessage = "Break your next jawbreaker 20% faster!"
      currentPrize.name += " Power UP!"
    }
    if (currentPrize.name == "Sandpaper") {
      newClickValue = 3;
      prizeMessage = "Break your next jawbreaker 40% faster!"
      currentPrize.name += " Power UP!"
    }
    if (currentPrize.name == "Hammer") {
      newClickValue = 2;
      prizeMessage = "Break your next jawbreaker 60% faster!"
      currentPrize.name += " Power UP!"
    }
    if (currentPrize.name == "Jack Hammer") {
      newClickValue = 1;
      prizeMessage = "Break your next jawbreaker 80% faster!"
      currentPrize.name += " Power UP!"
    }
    if (currentPrize.name == "Bomb") {
      newClickValue = 0;
      prizeMessage = "Instantly break your next jawbreaker!"
      currentPrize.name += " Power UP!"
    }
    const dialogRef = this.dialog.open(PrizeWindowDialog, {data: {
      prizeName: currentPrize.name,
      prizeImage: currentPrize.image,
      extraMessage: prizeMessage
    }});
    await dialogRef.afterClosed().toPromise();
    return newClickValue;
  }

  getPrize() {
    let randomNumber = Math.random() * 5 | 0;
    randomNumber = Math.floor(randomNumber);
    if (this.RARITY_LEVEL == "COMMON") {
      return this.getCommonPrize(randomNumber);
    }
    if (this.RARITY_LEVEL == "UNCOMMON") {
      return this.getUncommonPrize(randomNumber);
    }
    if (this.RARITY_LEVEL == "RARE") {
      return this.getRarePrize(randomNumber);
    }
    if (this.RARITY_LEVEL == "ULTRA RARE") {
      return this.getUltraRarePrize(randomNumber);
    }
    if (this.RARITY_LEVEL == "SUPER ULTRA RARE") {
      return this.getSuperUltraRarePrize(randomNumber);
    }
    return {name: "Developers Sticker", image: "../assets/JawbreakerCOMMON.png"};
  }

  getCommonPrize(id:number) {
    let imageSrc = "../assets/";
    let imageName = "Prize";
    if (id == 0) {
      imageSrc+= "Common1.png"
      imageName="Lump of Coal";
    } else if (id <=1) {
      imageSrc+= "Common2.png"
      imageName="Blue Steam";
    } else if (id <=2) {
      imageSrc+= "Common3.png"
      imageName="Toothpick";
    }else if (id <=3) {
      imageSrc+= "Common4.png"
      imageName="Cheese";
    }else if (id <=4) {
      imageSrc+= "Common5.png"
      imageName="Common Sticker";
    }
    return {name: imageName, image: imageSrc};
  }

  getUncommonPrize(id:number) {
    let imageSrc = "../assets/";
    let imageName = "Prize";

    if (id == 0) {
      imageSrc+= "Uncommon1.png"
      imageName="Shiny Blue Jawbreaker";
    } else if (id <=1) {
      imageSrc+= "Uncommon2.png"
      imageName="Shiny Red Jawbreaker";
    } else if (id <=2) {
      imageSrc+= "Uncommon3.png"
      imageName="Sandpaper";
    }else if (id <=3) {
      imageSrc+= "Uncommon4.png"
      imageName="Book about Jawbreakers";
    }else if (id <=4) {
      imageSrc+= "Uncommon5.png"
      imageName="Uncommon Sticker";
    }
    return {name: imageName, image: imageSrc};
  }

  getRarePrize(id:number) {
    let imageSrc = "../assets/";
    let imageName = "Prize";

    if (id == 0) {
      imageSrc+= "Rare1.png"
      imageName="Shiny Purple Jawbreaker";
    } else if (id <=1) {
      imageSrc+= "Rare2.png"
      imageName="Hammer";
    } else if (id <=2) {
      imageSrc+= "Rare3.png"
      imageName="Orange Sparkles";
    }else if (id <=3) {
      imageSrc+= "Rare4.png"
      imageName="Green Sparkles";
    }else if (id <=4) {
      imageSrc+= "Rare5.png"
      imageName="Rare Sticker";
    }
    return {name: imageName, image: imageSrc};
  }

  getUltraRarePrize(id:number) {
    let imageSrc = "../assets/";
    let imageName = "Prize";

    if (id == 0) {
      imageSrc+= "UltraRare1.png"
      imageName="Shiny Gold Jawbreaker";
    } else if (id <=1) {
      imageSrc+= "UltraRare2.png"
      imageName="Blue Toy Car";
    } else if (id <=2) {
      imageSrc+= "UltraRare3.png"
      imageName="Yellow Toy Car";
    }else if (id <=3) {
      imageSrc+= "UltraRare4.png"
      imageName="Jack Hammer";
    }else if (id <=4) {
      imageSrc+= "UltraRare5.png"
      imageName="Super Ultra Rare Sticker";
    }
    return {name: imageName, image: imageSrc};
  }

  getSuperUltraRarePrize(id:number) {
    let imageSrc = "../assets/";
    let imageName = "Prize";

    if (id == 0) {
      imageSrc+= "SuperUltraRare1.png"
      imageName="Bomb";
    } else if (id <=1) {
      imageSrc+= "SuperUltraRare2.png"
      imageName="Bag of money";
    } else if (id <=2) {
      imageSrc+= "SuperUltraRare3.png"
      imageName="Blue Sparkles";
    }else if (id <=3) {
      imageSrc+= "SuperUltraRare4.png"
      imageName="Diamond Ring";
    }else if (id <=4) {
      imageSrc+= "SuperUltraRare5.png"
      imageName="Super Ultra Rare Sticker";
    }
    return {name: imageName, image: imageSrc};
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
    if (randomNumber < 40) {
      return "COMMON";
    } else if (randomNumber < 70) {
      return "UNCOMMON";
    }else if (randomNumber < 85) {
      return "RARE";
    }else if (randomNumber < 93) {
      return "ULTRA RARE";
    }else {
      return "SUPER ULTRA RARE";
    }
  }

  public getNeededClicks() {
    return 5;
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
    let breakerBonus: number;
    breakerBonus = await this.openDialog();
    this.NEEDED_CLICKS = breakerBonus;
    this.newRarityAnimation();
    this.RARITY_LEVEL = this.getRarityRanking();
    this.imageSource = "../assets/Jawbreaker" + this.RARITY_LEVEL + ".png";
    this.imageWidth = this.CANDY_SIZE;
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
    if (this.NEEDED_CLICKS == 0) {
      this.finishBreaking();
    }
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
