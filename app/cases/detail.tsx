import type { Route } from './+types/detail';

export default function CasesDetail({ params }: Route.ComponentProps) {
  const { id } = params;

  return (
    <div className="h-[110vh]">
      <h1 className="">Case Detail: {id}</h1>
    </div>
  );
}
