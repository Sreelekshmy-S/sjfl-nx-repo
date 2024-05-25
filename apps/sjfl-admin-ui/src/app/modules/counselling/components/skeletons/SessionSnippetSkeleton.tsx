import { Card, CardContent, Skeleton } from '@sjfl/ui';

export const SessionSnippetSkeleton = () => {
  return (
    <Card>
      <CardContent className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </CardContent>
    </Card>
  );
};
