export default function Page({ params }: { params: { workId: string } }) {
  return <div>Project {params.workId}</div>;
}
