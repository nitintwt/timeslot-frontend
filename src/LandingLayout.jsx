import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/next';

export default function LandingLayout() {
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
      <Analytics />
    </div>
  );
}
