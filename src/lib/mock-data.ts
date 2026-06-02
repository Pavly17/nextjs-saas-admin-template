export const revenueData = [
  { name: "Jan", total: 4200 },
  { name: "Feb", total: 3800 },
  { name: "Mar", total: 5100 },
  { name: "Apr", total: 4600 },
  { name: "May", total: 5400 },
  { name: "Jun", total: 4800 },
  { name: "Jul", total: 5900 },
  { name: "Aug", total: 6100 },
  { name: "Sep", total: 5500 },
  { name: "Oct", total: 6300 },
  { name: "Nov", total: 6800 },
  { name: "Dec", total: 7200 },
];

export const recentActivity = [
  {
    id: "1",
    user: "Olivia Martin",
    email: "olivia.martin@email.com",
    action: "Subscribed to Premium plan",
    amount: "+$99.00",
    date: "Just now",
    avatar: "OM",
  },
  {
    id: "2",
    user: "Jackson Lee",
    email: "jackson.lee@email.com",
    action: "Upgraded to VIP plan",
    amount: "+$299.00",
    date: "2 hours ago",
    avatar: "JL",
  },
  {
    id: "3",
    user: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    action: "Canceled subscription",
    amount: "-$99.00",
    date: "5 hours ago",
    avatar: "IN",
  },
  {
    id: "4",
    user: "William Kim",
    email: "will@email.com",
    action: "Subscribed to Basic plan",
    amount: "+$29.00",
    date: "1 day ago",
    avatar: "WK",
  },
  {
    id: "5",
    user: "Sofia Davis",
    email: "sofia.davis@email.com",
    action: "Renewed Premium plan",
    amount: "+$99.00",
    date: "2 days ago",
    avatar: "SD",
  },
];

export type Tier = "Free" | "Premium" | "VIP";

export interface User {
  id: string;
  name: string;
  email: string;
  tier: Tier;
  status: "Active" | "Inactive";
  joinedAt: string;
}

export const usersData: User[] = [
  { id: "101", name: "Alice Smith", email: "alice@example.com", tier: "Premium", status: "Active", joinedAt: "2023-10-12" },
  { id: "102", name: "Bob Jones", email: "bob@example.com", tier: "Free", status: "Inactive", joinedAt: "2024-01-05" },
  { id: "103", name: "Charlie Brown", email: "charlie@example.com", tier: "VIP", status: "Active", joinedAt: "2022-05-20" },
  { id: "104", name: "Diana Prince", email: "diana@example.com", tier: "Premium", status: "Active", joinedAt: "2023-11-01" },
  { id: "105", name: "Evan Wright", email: "evan@example.com", tier: "Free", status: "Active", joinedAt: "2024-02-14" },
  { id: "106", name: "Fiona Gallagher", email: "fiona@example.com", tier: "VIP", status: "Inactive", joinedAt: "2021-08-30" },
  { id: "107", name: "George Miller", email: "george@example.com", tier: "Premium", status: "Active", joinedAt: "2023-09-15" },
  { id: "108", name: "Hannah Abbott", email: "hannah@example.com", tier: "Free", status: "Active", joinedAt: "2024-03-22" },
];

export interface ContentItem {
  id: string;
  title: string;
  type: "Article" | "Audio Log" | "Video";
  status: "Draft" | "Published" | "Archived";
  author: string;
  views: number;
}

export const contentData: ContentItem[] = [
  { id: "c1", title: "The Future of SaaS Growth", type: "Article", status: "Published", author: "Olivia Martin", views: 12450 },
  { id: "c2", title: "Q3 Earnings Call Highlights", type: "Audio Log", status: "Published", author: "Admin Team", views: 3200 },
  { id: "c3", title: "New Dashboard Walkthrough", type: "Video", status: "Draft", author: "Jackson Lee", views: 0 },
  { id: "c4", title: "Optimizing User Retention", type: "Article", status: "Archived", author: "Isabella Nguyen", views: 8900 },
];
