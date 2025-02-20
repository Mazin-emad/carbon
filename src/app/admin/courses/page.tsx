import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function AdminCoursesPage() {
  return (
    <div className="container py-6">
      <PageHeader title="Courses">
        <Button>
          <Link href="/admin/courses/new">New Course</Link>
        </Button>
      </PageHeader>
      TODO: AdminCoursesPage
    </div>
  );
}
