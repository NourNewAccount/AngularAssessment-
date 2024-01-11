import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserModel } from '../../shared/models/user_model';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,MatPaginatorModule, MatCardModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  @Input() S_users?: UserModel[];
  users: UserModel[] = [];
  totalUsers: number = 0;
  pageSize: number = 6; 
  isLoading: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
    
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.data as UserModel[];
      this.totalUsers = response.total;
      this.isLoading = false;
    });
  }

  onPageChange(event: any): void {
    const pageIndex = event.pageIndex + 1; 
    this.userService.getUsersByPage(pageIndex).subscribe((response: any) => {
    this.users = response.data as UserModel[];
    });
  }

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user', userId]);
  }


}