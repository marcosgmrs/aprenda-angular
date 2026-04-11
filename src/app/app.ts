import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Breadcrumbs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}