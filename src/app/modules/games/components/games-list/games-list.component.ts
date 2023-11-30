import { Component } from '@angular/core';

interface Game {
  id: number;
  name: string;
  reqCpu: { [key: string]: string };
  price: string;
  genere: { [key: string]: string | number };
  gameType: string;
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {

  gameList: Game[] = [
    {
      id: 0,
      name: "The Witcher 3: Wild Hunt",
      reqCpu: {
        CPU: "Intel Core i5-2500K 3.3GHz / AMD Phenom II X4 940",
        RAM: "6 GB",
        HDD: "35 GB"
      },
      genere: {
        name: "Adventure",
        PEGI: "PEGI 18"
      },
      price: "$29.99",
      gameType: "Single Player"
    },
    {
      id: 1,
      name: "Fortnite",
      reqCpu: {
        CPU: "Intel Core i5-7300U 3.5GHz / AMD Ryzen 5 2600",
        RAM: "8 GB",
        HDD: "40 GB"
      },
      genere: {
        name: "Battle Royale",
        PEGI: "Free with in-app purchases"
      },
      price: "Free",
      gameType: "Multiplayer"
    },
    {
      id: 2,
      name: "Minecraft",
      reqCpu: {
        CPU: "Intel Core i3-3210 3.2GHz / AMD A8-7600 APU",
        RAM: "4 GB",
        HDD: "4 GB"
      },
      genere: {
        name: "Sandbox",
        PEGI: "PEGI 7"
      },
      price: "$26.95",
      gameType: "Multiplayer"
    },
    {
      id: 3,
      name: "Overwatch",
      reqCpu: {
        CPU: "Intel Core i3-6300 3.8GHz / AMD FX-4350 4.2GHz",
        RAM: "6 GB",
        HDD: "30 GB"
      },
      genere: {
        name: "Shooter",
        PEGI: "PEGI 12"
      },
      price: "$39.99",
      gameType: "Multiplayer"
    },
    {
      id: 4,
      name: "Assassin's Creed Valhalla",
      reqCpu: {
        CPU: "Intel Core i5-4460 / AMD Ryzen 3 1200",
        RAM: "8 GB",
        HDD: "50 GB"
      },
      genere: {
        name: "Action",
        PEGI: "PEGI 18"
      },
      price: "$59.99",
      gameType: "Single Player"
    }
  ];

  formatGameName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}

