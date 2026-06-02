"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contentData } from "@/lib/mock-data";
import { FileText, Headphones, Video, MoreHorizontal, Edit, Trash2 } from "lucide-react";

export default function ContentPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Article": return <FileText className="h-5 w-5" />;
      case "Audio Log": return <Headphones className="h-5 w-5" />;
      case "Video": return <Video className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20";
      case "Draft": return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20";
      case "Archived": return "bg-muted text-muted-foreground hover:bg-muted/80";
      default: return "bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground mt-1">Review and manage your platform&apos;s content inventory.</p>
        </div>
        <Button>Create New Content</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contentData.map((content) => (
          <Card key={content.id} className="flex flex-col overflow-hidden hover:border-primary/50 transition-colors group">
            <CardHeader className="pb-4 relative">
              <div className="absolute top-4 right-4 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                 <MoreHorizontal className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                {getIcon(content.type)}
              </div>
              <CardTitle className="text-lg line-clamp-1">{content.title}</CardTitle>
              <CardDescription className="flex justify-between items-center mt-2">
                 <span>{content.author}</span>
                 <span className="text-xs">{content.views.toLocaleString()} views</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-4">
               <div className="flex gap-2">
                 <Badge variant="outline" className="font-normal">{content.type}</Badge>
                 <Badge variant="secondary" className={`border-0 ${getStatusColor(content.status)}`}>{content.status}</Badge>
               </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border/50 bg-muted/20 flex justify-between gap-2">
               <Button variant="ghost" size="sm" className="w-full text-muted-foreground hover:text-primary">
                 <Edit className="h-4 w-4 mr-2" />
                 Edit
               </Button>
               <Button variant="ghost" size="sm" className="w-full text-muted-foreground hover:text-destructive">
                 <Trash2 className="h-4 w-4 mr-2" />
                 Delete
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
