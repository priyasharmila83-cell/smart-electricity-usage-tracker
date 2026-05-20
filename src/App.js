// App.js

import React, {
  Fragment,
  useState,
} from "react";

import "./App.css";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function App() {

  const months = [

    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const COLORS = [

    "#38bdf8",
    "#8b5cf6",
    "#14b8a6",
    "#f59e0b",
    "#ec4899",
    "#06b6d4",
    "#22c55e",
    "#f97316",
    "#0ea5e9",
    "#a855f7",
    "#84cc16",
    "#ef4444",
    "#e11d48",
    "#0f766e",
    "#7c3aed",
    "#2563eb",
    "#65a30d",
    "#c2410c",
  ];

  const [selectedMonth, setSelectedMonth] =
    useState("January");

  const [newAppliance, setNewAppliance] =
    useState("");

  const [newWatts, setNewWatts] =
    useState("");

  const [appliances, setAppliances] =
    useState([

      {
        id: 1,
        name: "Fan",
        watts: 75,

        usage: {
          January: 10,
          February: 10,
          March: 12,
          April: 12,
          May: 14,
          June: 15,
          July: 13,
          August: 12,
          September: 10,
          October: 9,
          November: 8,
          December: 7,
        },
      },

      {
        id: 2,
        name: "Air Conditioner",
        watts: 1500,

        usage: {
          January: 4,
          February: 4,
          March: 5,
          April: 6,
          May: 8,
          June: 10,
          July: 10,
          August: 9,
          September: 7,
          October: 5,
          November: 4,
          December: 4,
        },
      },

      {
        id: 3,
        name: "Refrigerator",
        watts: 180,

        usage: {
          January: 24,
          February: 24,
          March: 24,
          April: 24,
          May: 24,
          June: 24,
          July: 24,
          August: 24,
          September: 24,
          October: 24,
          November: 24,
          December: 24,
        },
      },

      {
        id: 4,
        name: "Television",
        watts: 120,

        usage: {
          January: 5,
          February: 5,
          March: 6,
          April: 6,
          May: 7,
          June: 7,
          July: 7,
          August: 6,
          September: 5,
          October: 5,
          November: 4,
          December: 4,
        },
      },
    ]);

  const calculateBill = (month) => {

    return appliances.reduce(
      (sum, item) => {

        const units =

          (
            item.watts *
            item.usage[month] *
            30
          ) / 1000;

        return sum + units * 8;
      },
      0
    );
  };

  const yearlyData =

    months.map((month) => ({

      month,

      bill:
        Number(
          calculateBill(month).toFixed(0)
        ),
    }));

  // PIE DATA WITH UNIQUE COLORS

 const generateColor = (index) => {

  const hue = (index * 57) % 360;

  return `hsl(${hue}, 70%, 55%)`;
};

const pieData =

  appliances.map((item, index) => ({

    name: item.name,

    value:
      item.watts *
      item.usage[selectedMonth],

    color:
      generateColor(index),
}));

  const updateUsage = (id, value) => {

    const updated =
      appliances.map((item) => {

        if (item.id === id) {

          return {

            ...item,

            usage: {

              ...item.usage,

              [selectedMonth]:
                Number(value),
            },
          };
        }

        return item;
      });

    setAppliances(updated);
  };

  const addAppliance = () => {

    if (
      newAppliance === "" ||
      newWatts === ""
    ) {
      return;
    }

    const usageTemplate = {};

    months.forEach((month) => {

      usageTemplate[month] = 1;
    });

    const newItem = {

      id: Date.now(),

      name: newAppliance,

      watts: Number(newWatts),

      usage: usageTemplate,
    };

    setAppliances([
      ...appliances,
      newItem,
    ]);

    setNewAppliance("");
    setNewWatts("");
  };

  const deleteAppliance = (id) => {

    const filtered =
      appliances.filter(
        (item) => item.id !== id
      );

    setAppliances(filtered);
  };

  return (

    <Fragment>

      <Box className="app">

        {/* HEADER */}

        <div className="header-section">

          <div className="logo-circle">
            ⚡
          </div>

          <div>

            <h1 className="title">
              Smart Electricity Usage Tracker
            </h1>

            <p className="subtitle">
              Monitor • Analyze • Save Energy
            </p>

          </div>

        </div>

        {/* TOP CARDS */}

        <Grid
          container
          spacing={3}
        >

          <Grid item xs={12} md={4}>

            <Card className="card">

              <CardContent>

                <Typography variant="h6">
                  Current Month Bill
                </Typography>

                <Typography variant="h4">

                  ₹
                  {
                    calculateBill(
                      selectedMonth
                    ).toFixed(0)
                  }

                </Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} md={4}>

            <Card className="card">

              <CardContent>

                <Typography variant="h6">
                  Minimum Bill
                </Typography>

                <Typography variant="h4">

                  ₹
                  {
                    Math.min(
                      ...yearlyData.map(
                        item => item.bill
                      )
                    )
                  }

                </Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} md={4}>

            <Card className="card">

              <CardContent>

                <Typography variant="h6">
                  Maximum Bill
                </Typography>

                <Typography variant="h4">

                  ₹
                  {
                    Math.max(
                      ...yearlyData.map(
                        item => item.bill
                      )
                    )
                  }

                </Typography>

              </CardContent>

            </Card>

          </Grid>

        </Grid>

        {/* MONTH SECTION */}

        <div className="controls">

          <h2 className="month-heading">
            Select Month 
          </h2>

          <Select
            value={selectedMonth}

            onChange={(e) =>
              setSelectedMonth(
                e.target.value
              )
            }

            className="month-select"
          >

            {
              months.map((month) => (

                <MenuItem
                  key={month}
                  value={month}
                >
                  {month}
                </MenuItem>
              ))
            }

          </Select>

        </div>

        {/* ADD APPLIANCE */}

        <div className="add-section">

          <TextField
            label="Appliance Name"
            variant="outlined"
            value={newAppliance}

            onChange={(e) =>
              setNewAppliance(
                e.target.value
              )
            }
          />

          <TextField
            label="Watts"
            type="number"
            variant="outlined"
            value={newWatts}

            onChange={(e) =>
              setNewWatts(
                e.target.value
              )
            }
          />

          <Button
            variant="contained"
            className="add-btn"
            onClick={addAppliance}
          >
            Add Appliance
          </Button>

        </div>

        {/* TABLE */}

        <div className="table-container">

          <h2 className="table-title">
            Appliance Usage Details
          </h2>

          <table className="modern-table">

            <thead>

              <tr>

                <th>Appliance</th>

                <th>Watts</th>

                <th>
                  Hours Used
                  ({selectedMonth})
                </th>

                <th>Save</th>

                <th>Delete</th>

              </tr>

            </thead>

            <tbody>

              {
                appliances.map((item) => (

                  <tr key={item.id}>

                    <td className="appliance-name">
                      {item.name}
                    </td>

                    <td>
                      {item.watts} W
                    </td>

                    <td>

                      <input
                        type="number"

                        value={
                          item.usage[
                          selectedMonth
                          ]
                        }

                        onChange={(e) =>
                          updateUsage(
                            item.id,
                            e.target.value
                          )
                        }
                      />

                    </td>

                    <td>

                      <Button
                        variant="contained"
                        className="update-btn"
                      >
                        Save
                      </Button>

                    </td>

                    <td>

                      <Button
                        variant="contained"
                        className="delete-btn"

                        onClick={() =>
                          deleteAppliance(
                            item.id
                          )
                        }
                      >
                        Delete
                      </Button>

                    </td>

                  </tr>
                ))
              }

            </tbody>

          </table>

        </div>

        {/* CHARTS */}

        <div className="chart-wrapper">

          {/* BAR CHART */}

          <div className="chart-card">

            <h2 className="chart-title">
              📊 Yearly Electricity Bill
            </h2>

            <ResponsiveContainer
              width="100%"
              height={500}
            >

              <BarChart
                data={yearlyData}
              >

                <XAxis
                  dataKey="month"
                  angle={-15}
                  interval={0}
                  textAnchor="end"
                />

                <YAxis />

                <Tooltip />

                <Bar dataKey="bill">

                  {
                    yearlyData.map(
                      (entry, index) => (

                        <Cell
                          key={index}

                          fill={
                            COLORS[
                            index %
                            COLORS.length
                            ]
                          }
                        />
                      )
                    )
                  }

                </Bar>

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* PIE CHART */}

          <div className="chart-card">

            <h2 className="chart-title">
              ⚡ Appliance Usage Distribution
            </h2>

            <ResponsiveContainer
              width="100%"
              height={500}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={170}
                  label
                >

                 {
 pieData.map(
    (entry, index) => (

      <Cell
        key={`cell-${index}`}
        fill={entry.color}
      />
    )
  )
}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </Box>

    </Fragment>
  );
}

export default App;