"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Settings, LogOut, Bell, CreditCard, Heart } from "lucide-react"

const userBookings = [
  {
    id: "TB-2024-001234",
    packageTitle: "Tropical Paradise Getaway",
    destination: "Maldives",
    travelDate: "2024-08-15",
    guests: 2,
    status: "Confirmed",
    totalAmount: 4998,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: "TB-2024-001235",
    packageTitle: "European Cultural Tour",
    destination: "Paris, Rome, Barcelona",
    travelDate: "2024-09-20",
    guests: 4,
    status: "Pending",
    totalAmount: 7596,
    image: "/placeholder.svg?height=100&width=150",
  },
]

const wishlistItems = [
  {
    id: 3,
    title: "Adventure Mountain Trek",
    destination: "Nepal Himalayas",
    price: 1299,
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 4,
    title: "Safari Wildlife Experience",
    destination: "Kenya & Tanzania",
    price: 3299,
    image: "/placeholder.svg?height=100&width=150",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TravelBook
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/packages" className="text-gray-700 hover:text-blue-600 transition-colors">
                Packages
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Link href="/dashboard" className="text-blue-600 font-medium">
                Dashboard
              </Link>
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">JD</span>
                </div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@email.com</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "bookings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("bookings")}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    My Bookings
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Profile Settings
                  </Button>
                  <Button
                    variant={activeTab === "payments" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("payments")}
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payment Methods
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "bookings" && (
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
                  <p className="text-gray-600">Manage your travel bookings and view trip details</p>
                </div>

                <div className="space-y-6">
                  {userBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={booking.image || "/placeholder.svg"}
                            alt={booking.packageTitle}
                            className="w-24 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-semibold">{booking.packageTitle}</h3>
                                <div className="flex items-center text-gray-600 mt-1">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {booking.destination}
                                </div>
                              </div>
                              <Badge className={booking.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}>
                                {booking.status}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                                <span className="text-sm">{booking.travelDate}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2 text-gray-500" />
                                <span className="text-sm">{booking.guests} guests</span>
                              </div>
                              <div className="text-sm">
                                <span className="font-semibold">${booking.totalAmount}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t">
                              <div className="text-sm text-gray-600">Booking ID: {booking.id}</div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                                <Button variant="outline" size="sm">
                                  Download Voucher
                                </Button>
                                {booking.status === "Confirmed" && (
                                  <Button variant="outline" size="sm">
                                    Cancel Booking
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
                  <p className="text-gray-600">Save your favorite packages for later</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlistItems.map((item) => (
                    <Card key={item.id}>
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <Button variant="ghost" size="sm" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                          <Heart className="w-4 h-4 text-red-500 fill-current" />
                        </Button>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.destination}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                          <div className="flex space-x-2">
                            <Link href={`/packages/${item.id}`}>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </Link>
                            <Link href={`/booking/${item.id}`}>
                              <Button size="sm">Book Now</Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
                  <p className="text-gray-600">Manage your account information</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          defaultValue="john.doe@email.com"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "payments" && (
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Methods</h1>
                  <p className="text-gray-600">Manage your saved payment methods</p>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">•••• •••• •••• 1234</p>
                            <p className="text-sm text-gray-600">Expires 12/26</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="outline" className="w-full bg-transparent">
                    Add New Payment Method
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
