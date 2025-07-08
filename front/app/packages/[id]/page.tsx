"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Star, Clock, Shield, Camera } from "lucide-react"

// Mock data - in real app this would come from API
const packageData = {
  id: 1,
  title: "Tropical Paradise Getaway",
  destination: "Maldives",
  price: 2499,
  duration: "7 days",
  rating: 4.8,
  reviews: 124,
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  category: "Beach",
  availability: "Available",
  maxGuests: 4,
  description:
    "Experience the ultimate luxury in the Maldives with our exclusive tropical paradise getaway. Stay in overwater bungalows with direct access to crystal-clear waters, enjoy world-class dining, and indulge in spa treatments while surrounded by breathtaking natural beauty.",
  highlights: [
    "Overwater bungalow accommodation",
    "All meals included",
    "Snorkeling and diving equipment",
    "Spa treatments",
    "Private beach access",
    "Sunset cruise",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival & Welcome",
      activities: ["Airport transfer", "Check-in to overwater bungalow", "Welcome dinner", "Sunset viewing"],
    },
    {
      day: 2,
      title: "Water Adventures",
      activities: ["Snorkeling excursion", "Dolphin watching", "Beach relaxation", "Spa treatment"],
    },
    {
      day: 3,
      title: "Island Exploration",
      activities: ["Local island visit", "Cultural experience", "Traditional lunch", "Water sports"],
    },
    {
      day: 4,
      title: "Relaxation Day",
      activities: ["Spa day", "Private beach time", "Yoga session", "Romantic dinner"],
    },
    {
      day: 5,
      title: "Adventure Day",
      activities: ["Scuba diving", "Fishing trip", "BBQ lunch", "Night fishing"],
    },
    {
      day: 6,
      title: "Leisure & Shopping",
      activities: ["Resort facilities", "Souvenir shopping", "Photography session", "Farewell dinner"],
    },
    {
      day: 7,
      title: "Departure",
      activities: ["Check-out", "Airport transfer", "Departure"],
    },
  ],
  included: [
    "7 nights accommodation in overwater bungalow",
    "All meals (breakfast, lunch, dinner)",
    "Airport transfers",
    "Snorkeling equipment",
    "Guided excursions",
    "Spa treatments (2 sessions)",
    "Water sports activities",
  ],
  notIncluded: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Alcoholic beverages",
    "Additional spa treatments",
    "Scuba diving certification",
  ],
}

export default function PackageDetailsPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [guests, setGuests] = useState(2)

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
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/packages" className="hover:text-blue-600">
                Packages
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{packageData.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="mb-4">
                <img
                  src={packageData.images[selectedImage] || "/placeholder.svg"}
                  alt={packageData.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {packageData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${packageData.title} ${index + 1}`}
                    className={`h-20 object-cover rounded cursor-pointer border-2 ${
                      selectedImage === index ? "border-blue-500" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Package Info */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{packageData.title}</h1>
                <Badge className={packageData.availability === "Available" ? "bg-green-500" : "bg-orange-500"}>
                  {packageData.availability}
                </Badge>
              </div>

              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{packageData.destination}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">{packageData.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">Max {packageData.maxGuests} guests</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500 fill-current" />
                  <span className="text-gray-700">
                    {packageData.rating} ({packageData.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">{packageData.description}</p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="itinerary" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="mt-6">
                <div className="space-y-4">
                  {packageData.itinerary.map((day) => (
                    <Card key={day.day}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                            {day.day}
                          </div>
                          {day.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-gray-400" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="highlights" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg border">
                      <Camera className="w-5 h-5 mr-3 text-blue-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="included" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600">What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {packageData.included.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Shield className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600">Not Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {packageData.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0">
                              <div className="w-3 h-3 border border-red-500 rounded-full"></div>
                            </div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <Card key={review}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-semibold">JD</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">John Doe</h4>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">2 weeks ago</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Amazing experience! The overwater bungalow was incredible and the staff was very friendly.
                          Would definitely recommend this package to anyone looking for a luxury getaway.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Book This Package</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-blue-600">${packageData.price}</span>
                  <span className="text-gray-500 ml-2">per person</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Price per person:</span>
                    <span>${packageData.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Guests:</span>
                    <span>{guests}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span className="text-blue-600">${packageData.price * guests}</span>
                  </div>
                </div>

                <Link href={`/booking/${packageData.id}`} className="w-full">
                  <Button className="w-full" size="lg">
                    Book Now
                  </Button>
                </Link>

                <Button variant="outline" className="w-full bg-transparent">
                  Add to Wishlist
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Free cancellation up to 48 hours before departure
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
