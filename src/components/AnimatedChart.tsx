import { ResponsiveContainer, AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const chartData = [
  { name: 'Mon', revenue: 520 },
  { name: 'Tue', revenue: 680 },
  { name: 'Wed', revenue: 740 },
  { name: 'Thu', revenue: 860 },
  { name: 'Fri', revenue: 960 },
  { name: 'Sat', revenue: 920 },
  { name: 'Sun', revenue: 1040 }
];

export default function AnimatedChart() {
  return (
    <div className="glass rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-glow">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Revenue</p>
          <h3 className="mt-2 text-2xl font-bold text-white">Weekly sales trend</h3>
        </div>
        <span className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-200">Solana</span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <Tooltip contentStyle={{ background: '#07030a', border: '1px solid rgba(148, 163, 184, 0.12)', color: '#f8fafc' }} />
            <Area type="monotone" dataKey="revenue" stroke="#38bdf8" fill="url(#revenueGradient)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
