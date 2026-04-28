"use client";

import { useMemo } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
};

export function TaskListClient({ task, initialPosts, category }: Props) {
  const localPosts = getLocalPostsForTask(task);

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    console.log("[Filter Debug] category prop:", category);
    console.log("[Filter Debug] normalizedCategory:", normalizedCategory);
    console.log("[Filter Debug] total posts:", combined.length);
    console.log("[Filter Debug] posts with category:", combined.map(p => ({ title: p.title, cat: (p.content as any)?.category })));

    if (normalizedCategory === "all") {
      return combined.filter((post) => {
        const content = post.content && typeof post.content === "object" ? post.content : {};
        const value = typeof (content as any).category === "string" ? (content as any).category : "";
        return !value || isValidCategory(value);
      });
    }

    const filtered = combined.filter((post) => {
      const content = post.content && typeof post.content === "object" ? post.content : {};
      const rawValue = (content as any).category;
      const value =
        typeof rawValue === "string"
          ? normalizeCategory(rawValue)
          : "";
      const matches = value === normalizedCategory;
      console.log(`[Filter Debug] post: ${post.title}, rawCategory: ${rawValue}, normalized: ${value}, matches: ${matches}`);
      return matches;
    });
    console.log("[Filter Debug] filtered result count:", filtered.length);
    return filtered;
  }, [category, initialPosts, localPosts]);

  if (!merged.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No posts yet for this section.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {merged.map((post) => {
        const localOnly = (post as any).localOnly;
        const href = localOnly
          ? `/local/${task}/${post.slug}`
          : buildPostUrl(task, post.slug);
        return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
      })}
    </div>
  );
}
