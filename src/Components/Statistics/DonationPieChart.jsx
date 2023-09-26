import { PieChart, Pie, Cell, Legend } from "recharts";

const DonationPieChart = () => {
  const addedDonation = JSON.parse(localStorage.getItem("addedDonation")) || [];
  const yourDonation = addedDonation.length;
  const totalDonation = 12;

  const remainingDonation = totalDonation - yourDonation;
  const data = [
    { name: "Your Donation", value: yourDonation },
    { name: "Total Donation", value: remainingDonation },
  ];

  const colors = ["#00C49F", "#FF444A"]; 

  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          labelLine={false}
          label={({
            cx,
            cy,
            midAngle,
            outerRadius,
            percent,
            index,
          }) => {
            const radius = outerRadius + 10;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
            return (
              <text
                x={x}
                y={y}
                fill={colors[index % colors.length]}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {`${(percent * 100).toFixed(2)}%`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default DonationPieChart;
