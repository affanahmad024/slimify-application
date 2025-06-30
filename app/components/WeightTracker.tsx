'use client'
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, TrendingUp, Weight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface WeightData {
  date: string;
  time: string;
  weight: number;
  dayOfWeek: string;
  year: string;
  month: string;
  dateNum: string;
}

interface WeightTrackerProps {
  data: WeightData[];
}

const WeightTracker: React.FC<WeightTrackerProps> = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'Day' | 'Week' | 'Month' | 'Year'>('Week');

  const processedData = useMemo(() => {
    if (!data || data.length === 0) return [];

    const sorted = [...data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    return sorted.map((item, index) => ({
      ...item,
      displayDate: item.date,
      fullDate: item.date,
      isHighest: item.weight === Math.max(...sorted.map(d => d.weight)),
      isLowest: item.weight === Math.min(...sorted.map(d => d.weight))
    }));
  }, [data]);

  const stats = useMemo(() => {
    if (!processedData.length) return { total: 0, average: 0, trend: 0 };

    const weights = processedData.map(d => d.weight);
    const total = weights.reduce((sum, w) => sum + w, 0);
    const average = total / weights.length;
    const trend = weights.length > 1 ? weights[weights.length - 1] - weights[0] : 0;

    return {
      total: parseFloat(total.toFixed(1)),
      average: parseFloat(average.toFixed(1)),
      trend: parseFloat(trend.toFixed(1))
    };
  }, [processedData]);

  // Calculate Y-axis domain for better visibility
  const yAxisDomain = useMemo(() => {
    if (!processedData.length) return [0, 100];
    const weights = processedData.map(d => d.weight);
    const min = Math.min(...weights);
    const max = Math.max(...weights);
    const padding = (max - min) * 0.1; // 10% padding
    return [Math.max(0, min - padding), max + padding];
  }, [processedData]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="text-blue-600 font-medium">{data.fullDate}</p>
          <p className="text-gray-800">
            <span className="text-gray-600">Weight: </span>
            <span className="font-bold">{data.weight} kg</span>
          </p>
          <p className="text-gray-500 text-sm">{data.time}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Weight className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Weight Report</h1>
          </div>
          <div className="flex items-center space-x-2 text-blue-600">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Today</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Total Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{processedData.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Average Weight</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.average} kg</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600 flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stats.trend >= 0 ? 'text-orange-500' : 'text-green-500'}`}>
                {stats.trend >= 0 ? '+' : ''}{stats.trend} kg
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <CardTitle className="text-lg font-semibold text-gray-900">Weight Progress</CardTitle>
              <div className="flex space-x-1">
                {(['Day', 'Week', 'Month', 'Year'] as const).map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                    className={`text-xs px-3 py-1 ${
                      selectedPeriod === period
                        ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 sm:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={processedData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="displayDate" 
                    stroke="#6B7280"
                    fontSize={10}
                    tickLine={false}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    fontSize={12}
                    tickLine={false}
                    domain={yAxisDomain}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="weight" 
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                    minPointSize={5}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-gray-700">Weight Entry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightTracker;