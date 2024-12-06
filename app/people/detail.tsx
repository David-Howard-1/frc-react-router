import type { Route } from './+types/detail';

export default function PeopleDetail({ params }: Route.ComponentProps) {
  const { id } = params;

  return (
    <div className="">
      <h1 className="">People Detail: {id}</h1>
    </div>
  );
}
