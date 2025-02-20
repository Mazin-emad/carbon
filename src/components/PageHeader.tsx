import { cn } from "@/lib/utils";

export default function PageHeader({
  title,
  children,
  className,
}: {
  className?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("mb-8 gap-4 flex justify-between items-center", className)}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      {children && <div>{children}</div>}
    </div>
  );
}
