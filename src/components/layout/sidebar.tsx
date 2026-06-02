import Link from "next/link";
import { LayoutDashboard, Users, FileText, Settings, LogOut } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card hidden md:flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <h1 className="font-bold text-xl tracking-tight text-primary">SaaS Admin</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          <li>
            <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md bg-accent text-accent-foreground transition-colors">
              <LayoutDashboard className="h-5 w-5" />
              Overview
            </Link>
          </li>
          <li>
            <Link href="/users" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <Users className="h-5 w-5" />
              Users
            </Link>
          </li>
          <li>
            <Link href="/content" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <FileText className="h-5 w-5" />
              Content
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-border">
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <Settings className="h-5 w-5" />
              Settings
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-destructive hover:bg-destructive/10 transition-colors">
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
