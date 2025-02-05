export default function Input({ type }: { type: string }) {
  return (
    <input className="bg-white py-1 px-3 border-1 rounded-sm" type={type} />
  );
}
