import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../../shared/organism/navbar/navbar";

@Component({
  selector: 'app-home-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss'
})
export class HomeLayout {

}
