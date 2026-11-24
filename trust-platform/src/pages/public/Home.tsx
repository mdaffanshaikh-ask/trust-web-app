import { Link } from "react-router-dom";
export default function Home() {
  return (<div className="py-10"><h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-forest-800">Every donation, traced to the work it paid for.</h1>
    <p className="mt-3 max-w-xl text-ink/70">Verified figures, published projects and reporting periods will appear here once the trust publishes them.</p>
    <Link to="/transparency" className="mt-6 inline-block rounded-md bg-forest-700 px-4 py-2 text-sm font-medium text-white hover:bg-forest-800">View transparency</Link></div>);
}
