import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'usercard',
  templateUrl: 'user-card.html',
  styleUrls: ['user-card.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class UserCard {}
