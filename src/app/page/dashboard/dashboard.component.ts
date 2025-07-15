import { Component } from '@angular/core';

interface Request {
  id: string;
  barangay: string;
  municipality: string;
  status: 'urgent' | 'in_progress' | 'completed';
  needs: string[];
  households: number;
  timeAgo: string;
}

interface CriticalArea {
  name: string;
  alertLevel: 'critical' | 'high' | 'moderate';
  affected: string;
}

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  recentRequests: Request[] = [
    {
      id: 'REQ-001',
      barangay: 'Barangay San Jose',
      municipality: 'Tacloban City',
      status: 'urgent',
      needs: ['Water', 'Food Packs', 'Medicine'],
      households: 245,
      timeAgo: '2 hours ago',
    },
    {
      id: 'REQ-002',
      barangay: 'Barangay Poblacion',
      municipality: 'Ormoc City',
      status: 'in_progress',
      needs: ['Clothing', 'Blankets', 'Hygiene Kits'],
      households: 180,
      timeAgo: '4 hours ago',
    },
    {
      id: 'REQ-003',
      barangay: 'Barangay Libertad',
      municipality: 'Butuan City',
      status: 'completed',
      needs: ['Rice', 'Canned Goods', 'Water'],
      households: 120,
      timeAgo: '1 day ago',
    },
  ];

  criticalAreas: CriticalArea[] = [
    {
      name: 'Tacloban City',
      alertLevel: 'critical',
      affected: '15,000 families',
    },
    { name: 'Ormoc City', alertLevel: 'high', affected: '8,500 families' },
    { name: 'Butuan City', alertLevel: 'moderate', affected: '5,200 families' },
  ];
}
