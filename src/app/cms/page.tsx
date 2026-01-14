"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: "draft" | "published" | "archived";
  published_at: string | null;
  created_at: string;
}

export default function CMSDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const siteId = "tooth-span";

  // Fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("site_id", siteId)
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Create new post
  const handleCreate = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const status = formData.get("status") as string;
    
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    try {
      const { data, error } = await supabase
        .from("posts")
        .insert({
          site_id: siteId,
          title,
          slug,
          content,
          excerpt: content.substring(0, 150),
          status,
          published_at: status === "published" ? new Date().toISOString() : null,
        })
        .select()
        .single();

      if (error) throw error;
      setPosts([data, ...posts]);
      setIsCreating(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to create post");
    }
  };

  // Update post
  const handleUpdate = async (formData: FormData) => {
    if (!editingPost) return;

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const status = formData.get("status") as string;

    try {
      const { data, error } = await supabase
        .from("posts")
        .update({
          title,
          content,
          excerpt: content.substring(0, 150),
          status,
          published_at: status === "published" && !editingPost.published_at 
            ? new Date().toISOString() 
            : editingPost.published_at,
        })
        .eq("id", editingPost.id)
        .select()
        .single();

      if (error) throw error;
      setPosts(posts.map(p => p.id === data.id ? data : p));
      setEditingPost(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update post");
    }
  };

  // Delete post
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase
        .from("posts")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete post");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: "#F4C409" }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Content Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your website content</p>
          </div>
          <button
            onClick={() => setIsCreating(true)}
            className="px-6 py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
            style={{ background: "#F4C409" }}
          >
            + New Post
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Create/Edit Modal */}
        {(isCreating || editingPost) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">
                {isCreating ? "Create New Post" : "Edit Post"}
              </h2>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  isCreating ? handleCreate(formData) : handleUpdate(formData);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    name="title"
                    type="text"
                    defaultValue={editingPost?.title || ""}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <textarea
                    name="content"
                    rows={8}
                    defaultValue={editingPost?.content || ""}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select
                    name="status"
                    defaultValue={editingPost?.status || "draft"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreating(false);
                      setEditingPost(null);
                    }}
                    className="flex-1 py-3 rounded-xl border border-gray-300 dark:border-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl text-white"
                    style={{ background: "#F4C409" }}
                  >
                    {isCreating ? "Create" : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="grid gap-4">
          {posts.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
              <p className="text-gray-500 dark:text-gray-400">No posts yet. Create your first post!</p>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === "published" 
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : post.status === "draft"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}>
                      {post.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {post.excerpt}...
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingPost(post)}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="px-4 py-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}