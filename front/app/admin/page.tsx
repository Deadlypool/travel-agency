"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Users, Calendar, DollarSign, TrendingUp, Settings, Plus, Edit, Trash2, Eye } from "lucide-react"

const dashboardStats = [
  {
    title: "Total Packages",
    value: "24",
    change: "+2 this month",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Active Bookings",
    value: "156",
    change: "+12% from last month",
    icon: Calendar,
    color: "text-green-600",
  },
  {
    title: "Total Users",
    value: "1,234",
    change: "+8% from last month",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Revenue",
    value: "$45,678",
    change: "+15% from last month",
    icon: DollarSign,
    color: "text-orange-600",
  },
]

const recentBookings = [
  {
    id: "TB-2024-001234",
    customer: "John Doe",
    package: "Tropical Paradise Getaway",
    amount: "$4,998",
    status: "Confirmed",
    date: "2024-01-15",
  },
  {
    id: "TB-2024-001235",
    customer: "Jane Smith",
    package: "European Cultural Tour",
    amount: "$7,596",
    status: "Pending",
    date: "2024-01-14",
  },
  {
    id: "TB-2024-001236",
    customer: "Mike Johnson",
    package: "Adventure Mountain Trek",
    amount: "$2,598",
    status: "Confirmed",
    date: "2024-01-13",
  },
]

const packages = [
  {
    id: 1,
    title: "Tropical Paradise Getaway",
    destination: "Maldives",
    price: 2499,
    status: "Active",
    bookings: 45,
    category: "Beach",
  },
  {
    id: 2,
    title: "European Cultural Tour",
    destination: "Paris, Rome, Barcelona",
    price: 1899,
    status: "Active",
    bookings: 32,
    category: "Cultural",
  },
  {
    id: 3,
    title: "Adventure Mountain Trek",
    destination: "Nepal Himalayas",
    price: 1299,
    status: "Draft",
    bookings: 0,
    category: "Adventure",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                TravelBook
              </Link>
              <span className="ml-4 px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded">Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                View Site
              </Link>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your travel booking system</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest booking activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{booking.customer}</p>
                          <p className="text-sm text-gray-600">{booking.package}</p>
                          <p className="text-xs text-gray-500">{booking.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{booking.amount}</p>
                          <Badge className={booking.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}>
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Package
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="packages" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Travel Packages</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Package
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Package
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Destination
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bookings
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {packages.map((pkg) => (
                        <tr key={pkg.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{pkg.title}</div>
                              <div className="text-sm text-gray-500">{pkg.category}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pkg.destination}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${pkg.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={pkg.status === "Active" ? "bg-green-500" : "bg-gray-500"}>
                              {pkg.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pkg.bookings}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Booking Management</h2>
              <div className="flex space-x-2">
                <Input placeholder="Search bookings..." className="w-64" />
                <Button variant="outline">Filter</Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Booking ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Package
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {booking.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.customer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.package}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={booking.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}>
                              {booking.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">User Management</h2>
              <div className="flex space-x-2">
                <Input placeholder="Search users..." className="w-64" />
                <Button variant="outline">Filter</Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
                  <p className="text-gray-600">
                    User management functionality would be implemented here with user listing, role management, and user
                    activity tracking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
