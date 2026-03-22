import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar,
  RadialBarChart, RadialBar, Legend,
} from 'recharts';

const monthlyData = [
  { month: 'Oct', shipments: 820 },
  { month: 'Nov', shipments: 940 },
  { month: 'Dec', shipments: 1050 },
  { month: 'Jan', shipments: 1120 },
  { month: 'Feb', shipments: 1280 },
  { month: 'Mar', shipments: 1410 },
];

const shipmentTypes = [
  { name: 'Freight', value: 46, color: 'hsl(193, 100%, 73%)' },
  { name: 'Express', value: 24, color: 'hsl(260, 60%, 72%)' },
  { name: 'Cross-border', value: 18, color: 'hsl(160, 60%, 60%)' },
  { name: 'Warehousing', value: 12, color: 'hsl(320, 50%, 70%)' },
];

const routeData = [
  { name: 'North Sea', efficiency: 92 },
  { name: 'Central EU', efficiency: 88 },
  { name: 'Baltic', efficiency: 79 },
  { name: 'Iberia', efficiency: 83 },
];

const radialData = [
  { name: 'Success', value: 98.4, fill: 'hsl(193, 100%, 73%)' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border px-4 py-2.5 text-sm backdrop-blur-xl"
      style={{
        background: 'hsla(213, 45%, 18%, 0.95)',
        borderColor: 'hsla(193, 100%, 73%, 0.25)',
        color: 'hsl(210, 40%, 92%)',
      }}>
      {label && <p className="mb-1 font-semibold text-white">{label}</p>}
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color || 'hsl(193, 100%, 73%)' }}>
          {p.name}: {p.value}{typeof p.value === 'number' && p.value < 100 ? '%' : ''}
        </p>
      ))}
    </div>
  );
};

function ChartCard({ title, subtitle, children, delay = 0 }: {
  title: string; subtitle: string; children: React.ReactNode; delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="reveal panel transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        borderColor: hovered ? 'hsla(193, 100%, 73%, 0.35)' : undefined,
        boxShadow: hovered ? '0 20px 50px -20px hsla(193, 85%, 60%, 0.25)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mb-4 text-xs" style={{ color: 'hsl(210, 20%, 65%)' }}>{subtitle}</p>
      {children}
    </div>
  );
}

export default function DashboardSection() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="reveal mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
            style={{ borderColor: 'hsla(193, 100%, 73%, 0.3)', background: 'hsla(193, 100%, 73%, 0.08)', color: 'hsl(var(--cyan-300))' }}>
            <span className="h-1.5 w-1.5 rounded-full status-pulse" style={{ background: 'hsl(var(--cyan-400))' }} />
            Live Analytics
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">Operations Dashboard</h2>
          <p className="mx-auto mt-3 max-w-xl">Interactive performance metrics from our logistics platform. Hover and click to explore the data.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Line Chart */}
          <ChartCard title="Monthly Shipments" subtitle="Six-month shipment throughput trend." delay={0}>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsla(0,0%,100%,0.06)" />
                  <XAxis dataKey="month" stroke="hsl(210,20%,55%)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(210,20%,55%)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone" dataKey="shipments" name="Shipments"
                    stroke="hsl(193, 100%, 73%)" strokeWidth={2.5}
                    dot={{ fill: 'hsl(193, 100%, 73%)', r: 4, strokeWidth: 2, stroke: 'hsl(213, 45%, 22%)' }}
                    activeDot={{ r: 7, fill: 'hsl(193, 100%, 83%)', stroke: 'hsl(193, 100%, 73%)', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Radial Bar */}
          <ChartCard title="Delivery Success Rate" subtitle="Rolling quality signal from completed deliveries." delay={80}>
            <div className="flex h-56 items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%" cy="50%" innerRadius="60%" outerRadius="90%"
                  startAngle={90} endAngle={-270}
                  data={radialData} barSize={14}
                >
                  <RadialBar
                    dataKey="value" cornerRadius={10}
                    background={{ fill: 'hsla(0,0%,100%,0.06)' }}
                  />
                  <Legend
                    content={() => (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-extrabold text-white">98.4%</span>
                      </div>
                    )}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Pie Chart */}
          <ChartCard title="Shipment Types" subtitle="Distribution by service profile." delay={160}>
            <div className="flex h-56 items-center gap-4">
              <div className="h-full w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={shipmentTypes} cx="50%" cy="50%"
                      innerRadius={40} outerRadius={70}
                      paddingAngle={3} dataKey="value"
                      stroke="none"
                    >
                      {shipmentTypes.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col gap-2.5">
                {shipmentTypes.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 text-sm">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: t.color }} />
                    <span className="text-white/80">{t.name}</span>
                    <span className="font-semibold text-white">{t.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>

          {/* Bar Chart */}
          <ChartCard title="Route Efficiency" subtitle="Performance by corridor cluster." delay={240}>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={routeData} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsla(0,0%,100%,0.06)" vertical={false} />
                  <XAxis dataKey="name" stroke="hsl(210,20%,55%)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis domain={[0, 100]} stroke="hsl(210,20%,55%)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="efficiency" name="Efficiency" radius={[6, 6, 0, 0]}>
                    {routeData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={`hsla(193, ${80 + i * 5}%, ${60 + i * 4}%, 0.7)`}
                        stroke="hsla(193, 100%, 73%, 0.3)"
                        strokeWidth={1}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}
