import { TaskListPage } from "@/components/tasks/task-list-page";
import { buildTaskMetadata } from "@/lib/seo";
import { taskPageMetadata } from "@/config/site.content";

export const revalidate = 3;

export const generateMetadata = () =>
  buildTaskMetadata("image", {
    path: "/image-sharing",
    title: taskPageMetadata.image.title,
    description: taskPageMetadata.image.description,
  });

export default async function ImageSharingPage({ searchParams }: { searchParams?: Promise<{ category?: string }> }) {
  const resolvedParams = await searchParams;
  console.log('[Server Debug] ImageSharingPage searchParams:', resolvedParams)
  console.log('[Server Debug] category from searchParams:', resolvedParams?.category)
  return <TaskListPage task="image" category={resolvedParams?.category} />;
}
